#!/usr/bin/env node
import { GitHubSodiumSealer } from '@hugoalh/github-sodium'
import { Octokit } from 'octokit'
import dashdash from 'dashdash'

const options = [
  {
    names: ['token', 't'],
    type: 'string',
    help: 'GitHub personal access token',
    helpArg: 'TOKEN'
  },
  {
    names: ['owner', 'o'],
    type: 'string',
    help: 'GitHub repository owner',
    helpArg: 'OWNER'
  },
  {
    names: ['repo', 'r'],
    type: 'string',
    help: 'GitHub repository',
    helpArg: 'REPO'
  },
  {
    names: ['key', 'k'],
    type: 'string',
    help: 'Secret key',
    helpArg: 'KEY'
  },
  {
    names: ['value', 'v'],
    type: 'string',
    help: 'Secret value',
    helpArg: 'VALUE'
  },
  {
    names: ['help', 'h'],
    type: 'bool',
    help: 'Print this help and exit'
  }
]

const showHelp = parser => {
  const help = parser.help({ includeEnv: true }).trimRight()
  console.log('github-sodium - GitHub Secret encryptor and updater\n')
  console.log('usage: github-sodium [OPTIONS]\n' + 'options:\n' + help)
}

;(async () => {
  try {
    const parser = dashdash.createParser({ options })
    const opts = parser.parse(process.argv)

    if (opts.help) {
      showHelp(parser)
      process.exit(0)
    }

    if ((!opts.token && !process.env.GITHUB_TOKEN) || !opts.owner || !opts.repo || !opts.key || !opts.value) {
      if (!opts.token && !process.env.GITHUB_TOKEN) {
        console.error('❌ GitHub personal access token')
      }

      if (!opts.owner) {
        console.error('❌ GitHub repository owner')
      }

      if (!opts.repo) {
        console.error('❌ GitHub repository')
      }

      if (!opts.key) {
        console.error('❌ Secret key')
      }

      if (!opts.value) {
        console.error('❌ Secret value')
      }

      console.log('')

      throw new Error('Missing required options. See --help for more information.')
    }

    const octokit = new Octokit({ auth: opts.token ?? process.env.GITHUB_TOKEN })

    const publicKey = (
      await octokit.request(`GET /repos/{owner}/{repo}/actions/secrets/public-key`, {
        owner: opts.owner,
        repo: opts.repo
      })
    ).data

    const res = await octokit.request('PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}', {
      owner: opts.owner,
      repo: opts.repo,
      secret_name: opts.key,
      key_id: publicKey.key_id,
      encrypted_value: new GitHubSodiumSealer(publicKey.key).encrypt(opts.value)
    })

    if (res.status > 299) {
      throw new Error(`An error occurred: ${res.status} ${JSON.stringify(res.data, null, 2)}`)
    }
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }
})()

const AggregatorAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_pauser',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_blacklister',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: '_feeCollector',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
    ],
    name: 'AddressEmptyCode',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'AddressInsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'BlacklistedAccount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'EnforcedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ExpectedPause',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FailedInnerCall',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'presumedSigner',
        type: 'address',
      },
    ],
    name: 'IncorrectSigner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'currentNonce',
        type: 'uint256',
      },
    ],
    name: 'InvalidAccountNonce',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'InvalidEndState',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'processorIndex',
        type: 'uint256',
      },
    ],
    name: 'InvalidProcessor',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidShortString',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTokenEntry',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MathOverflowedMulDiv',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    name: 'MinBuyTokenAssertFailed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnableInvalidOwner',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'OwnableUnauthorizedAccount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReentrancyGuardReentrantCall',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
    ],
    name: 'SafeERC20FailedOperation',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'str',
        type: 'string',
      },
    ],
    name: 'StringTooLong',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'UnauthorizedBlacklister',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'UnauthorizedPauser',
    type: 'error',
  },

  {
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      {
        internalType: 'bytes1',
        name: 'fields',
        type: 'bytes1',
      },
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'version',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'verifyingContract',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'salt',
        type: 'bytes32',
      },
      {
        internalType: 'uint256[]',
        name: 'extensions',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct ExecutionVerifier.TokenDetail[]',
        name: 'sellTokens',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct ExecutionVerifier.TokenDetail[]',
        name: 'buyTokens',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'processorIndex',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct ExecutionVerifier.TokenDetail[]',
            name: 'sellTokenDetails',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'payload',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'metadata',
            type: 'bytes',
          },
        ],
        internalType: 'struct ExecutionVerifier.Route[]',
        name: 'routes',
        type: 'tuple[]',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct ExecutionVerifier.TokenDetail[]',
        name: 'sellTokens',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'contract IERC20',
            name: 'token',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct ExecutionVerifier.TokenDetail[]',
        name: 'buyTokens',
        type: 'tuple[]',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'processorIndex',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct ExecutionVerifier.TokenDetail[]',
            name: 'sellTokenDetails',
            type: 'tuple[]',
          },
          {
            internalType: 'bytes',
            name: 'payload',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'metadata',
            type: 'bytes',
          },
        ],
        internalType: 'struct ExecutionVerifier.Route[]',
        name: 'routes',
        type: 'tuple[]',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'execute',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct ExecutionVerifier.TokenDetail[]',
            name: 'sellTokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct ExecutionVerifier.TokenDetail[]',
            name: 'buyTokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'processorIndex',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ExecutionVerifier.TokenDetail[]',
                name: 'sellTokenDetails',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'metadata',
                type: 'bytes',
              },
            ],
            internalType: 'struct ExecutionVerifier.Route[]',
            name: 'routes',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct ExecutionVerifier.Execution',
        name: 'execution',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'extract',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeCollector',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeProportion',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct ExecutionVerifier.TokenDetail[]',
            name: 'sellTokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'contract IERC20',
                name: 'token',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
              },
            ],
            internalType: 'struct ExecutionVerifier.TokenDetail[]',
            name: 'buyTokens',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'processorIndex',
                type: 'uint256',
              },
              {
                components: [
                  {
                    internalType: 'contract IERC20',
                    name: 'token',
                    type: 'address',
                  },
                  {
                    internalType: 'uint256',
                    name: 'amount',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ExecutionVerifier.TokenDetail[]',
                name: 'sellTokenDetails',
                type: 'tuple[]',
              },
              {
                internalType: 'bytes',
                name: 'payload',
                type: 'bytes',
              },
              {
                internalType: 'bytes',
                name: 'metadata',
                type: 'bytes',
              },
            ],
            internalType: 'struct ExecutionVerifier.Route[]',
            name: 'routes',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct ExecutionVerifier.Execution',
        name: 'execution',
        type: 'tuple',
      },
    ],
    name: 'hashExecution',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'nonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'paused',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pauser',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]

export default AggregatorAbi

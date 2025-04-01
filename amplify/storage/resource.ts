import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'ssm-test-bucket-logs-685614052638',
  isDefault: true,
   access: (allow) => ({
    '*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'admin/*': [
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read'])
    ],
    'private/{entity_id}/*': [
        allow.entity('identity').to(['read', 'write', 'delete'])
    ]
   })
});

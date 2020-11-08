export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fa7f691f2e5495377793401',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hj4crt26',
                  apiId: '7e50a193-39e4-42b9-9d5c-f39d12db613d'
                },
                {
                  buildHookId: '5fa7f691819bc9138dec5b53',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dvgdmuhq',
                  apiId: '5ed291f7-5617-4c06-ad59-79259080b7c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xxxronelxxx/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dvgdmuhq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

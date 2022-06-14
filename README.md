# vusers

[![Netlify](https://img.shields.io/netlify/0feeab69-219d-4b6e-87ec-19176d7a43a1?label=deploy)](https://vusers.bouhartsev.top)

Site example with list of users. Available views: table, cards, groups (drag&drop).

DEMO: [https://vusers.bouhartsev.top](https://vusers.bouhartsev.top)

## Used Technologies

Nuxt (Vue), Element UI Library, el-bigdata-table, vue-dataset, vuedraggable

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).


## API Sample

Generated with https://json-generator.com/


```js
[
  '{{repeat(301, 1000)}}',
  {
    id: '{{objectId()}}',
    group: '{{random("Руководство", "Бухгалтерия", "Отдел кадров", "ИТД")}}',
    name: '{{firstName()}} {{surname()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    gender: '{{gender()}}',
    picture: function (tags) {
      var gender = (this.gender=="male")?"men":"women";
      return 'https://randomuser.me/api/portraits/' + gender + '/' + tags.integer(0,99) + '.jpg';
    }
  }
]
```
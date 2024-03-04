module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'always'], //语句强制分号结尾
    quotes: [1, 'single'], //引号类型 ""
    'comma-dangle': ['error', 'never'],
    'no-alert': 0, //禁止使用alert
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-duplicate-case': 2, //switch中的case标签不能重复
    'no-extra-semi': 2, //禁止多余的冒号
    'no-multi-spaces': 1, //不能用多余的空格
    'no-unused-vars': 1, //不能出现未使用变量
    'vue/no-reserved-component-names': 0, //不允许在组件定义中使用保留名称
    'vue/multi-word-component-names': 0 //要求组件名称始终为多字
  }
};

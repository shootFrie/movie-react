// webpack 配置
const { override, fixBabelImports } = require('customize-cra');

module.exports = override (
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css'
  }),
);
  
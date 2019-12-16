const path = require('path');
function resolve(dir) {
  return path.join(__dirname,dir)
}
module.exports = {
  configureWebpack:{
    resolve:{ 
      extensions:[],//省略后缀名
      alias:{//配置文件别名
        '@assets':resolve('./src/assets'),
        '@components':resolve('./src/components'),
        '@server':resolve('./src/server'),
        '@views':resolve('./src/views'),
        '@utils':resolve('./src/utils'),
      }
    }
  }
}
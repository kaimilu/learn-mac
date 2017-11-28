import yargs from 'yargs'

const args = yargs

  // 是否开发/线上环境
  .option('production',{
    boolean:true, // 类型
    default:false, // 默认false 开发环境
    describe:'min all scripts' // 描述
  })

  // 监听
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })

  // 是否详细输入命令行输入的日志
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })

  // 强制生成 sourcemaps
  .option('sourcemaps',{
    describe:'force creation of sroucemaps'
  })

  // 服务器端口
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })

  // 表示对输入的命令行以字符串进行解析
  .argv

export default args


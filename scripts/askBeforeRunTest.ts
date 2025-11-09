import readline from 'readline';

export default async function globalSetup() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const answer = await new Promise(resolve =>
    rl.question('测试包含 GUI 操作测试，可能会对当前测试机器的环境产生影响，请确保您的设备没有其他重要任务在运行。是否继续运行测试？(y/n): ', resolve)
  ) as string;
  rl.close();

  if (answer.trim().toLowerCase() !== 'y') {
    console.log('❌ 测试已取消');
    process.exit(0);
  }

  console.log('✅ 开始运行测试...');
}

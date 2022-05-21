// Begin Learn process env host
// const server = new Server({
//     host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
// });
/// End Learn process env host

// Begin Learn process gathering resource information
const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
// End Learn process gathering resource information

// Begin Learn process argv
const firstName = process.argv[2];
const lastName = process.argv[3];
 
console.log(`Hello ${firstName} ${lastName}`);
// End Learn process argv

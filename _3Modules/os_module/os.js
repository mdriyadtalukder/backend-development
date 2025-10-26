const os = require("os");

// Platform type (e.g., 'win32', 'linux', 'darwin')
console.log("platform info:", os.platform());

// Information about the current user (username, UID, home dir, etc.)
console.log("user info:", os.userInfo());

// Array of objects describing each logical CPU core (model, speed, times)
console.log("cpu info:", os.cpus());

// CPU architecture (e.g., 'x64', 'arm', 'arm64')
console.log("cpu architecture info:", os.arch());

// Total system memory in bytes
console.log("total memory:", os.totalmem(), "byte");

// Free (unused) system memory in bytes
console.log("free memory:", os.freemem(), "byte");

// System uptime (seconds since the system was booted)
console.log("uptime:", os.uptime(), " second");

// Hostname of the machine
console.log("hostname:", os.hostname());

// Home directory of the current user
console.log("home directory:", os.homedir());

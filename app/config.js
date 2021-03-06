/**
 * Author: Michael R. Johnston
 * Date: 2/20/14
 * Time: 10:17 AM
 */
config = {};

// A comma separated list of hosts on which you have Scrapyd running. (Only one supported at present)
config.scrapyds = [
        // Just the hostname (or ip) sans protocol - no 'http://' or 'https://'
        {'host': 'ec2-107-21-150-252.compute-1.amazonaws.com', 'port': 6800}
    ];

//Various app settings
config.settings= {
//        parse_logs: true,
//        parse_items: true,
        local_port: 3001 // Change this if it is unsuitable for your environment
}

// Ignore the module.exports if we're running in a browser
if (typeof window === 'undefined')
    module.exports = config;
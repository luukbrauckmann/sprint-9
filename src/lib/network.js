import os from 'os'

const networkInterfaces = os.networkInterfaces()

const getExposedIp = () => {
	const networkNames = Object.keys(networkInterfaces)
	for (let networkName of networkNames) {
		for (let networkItem of networkInterfaces[networkName]) {
			if (networkItem.family === 'IPv4') return networkItem.address
		}
	}
}

const network = {
	networkInterfaces,
	getExposedIp
}


export default network
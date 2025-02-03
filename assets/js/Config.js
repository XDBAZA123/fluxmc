const Config = {
/* START CONFIG */

'server-logo': 'assets/img/logo.png',

'server-ip': 'play.fluxmc.fun',

'server-status': {
	'background-color': '#fff659',
	'text-color': 'black',
	'icon': 'assets/img/status.png',

	'value': '{online} / {max} players connected!',
	'copy-value': 'IP COPIED!'
},


'background': {
	'type': 'image', // TYPES: IMAGE OR COLOR
	'value': "assets/img/bg.png",
	'opacity': {
		'color': 'black',
		'value': 0.8
	}
},


'buttons-style': {
	'background-color': '#fff659',
	'text-color': 'black'
},

'web-buttons': {
	'Store': {
		icon: 'assets/img/store.png',
		url: 'https://store.myweb.net'
	},
	'Forum': {
		icon: 'assets/img/forum.png',
		url: 'https://forum.myweb.net'
	},
	'Voting': {
		icon: 'assets/img/vote.png',
		url: 'https://bans.myvotes.net'
	}
}




/* END CONFIG */
};





/* IGNORE */
export default Config;

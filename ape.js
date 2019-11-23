let levels_1 = [
	['http://cse.nitk.ac.in'],
	['sites', 'courses'],
	['default', 'doctoral', 'pg'],
	['files'],
	['uploads'],
	['IoTfinal-brochure_0.pdf','SUC%2719-Brochure.pdf','cybersecuritysecond.pdf']
];
let relation_1 = [
	[['sites', 'courses'], [], [], [], [], []],
	[['default'], ['doctoral', 'pg'], [], [], [], []],
	[['files'], [], [], [], [], []],
	[['uploads'], [], [], [], [], []],
	[['IoTfinal-brochure_0.pdf','SUC%2719-Brochure.pdf','cybersecuritysecond.pdf'],
		[],[],[],[],[]
	],
	[[], [], [], [], [], []]
];

/*--------------trial version 2-------------------*/


/*--------------trial version 1-------------------*/
// function buildChildren(i, j){
	
// 	for(let level = i; level < levels_1.length; level++){
// 		let x = []
// 		for(let node = j; node < levels_1[level].length; node++){
// 			if(relation_1[level][node].length) {
// 				x.push({name: levels_1[level][node], children: []})
// 				for(let child = 0; child < relation_1[level][node].length; child++){
// 					x[j].children.push({
// 						name: relation_1[level][node][child],
// 						children: buildChildren(level+1, node)
// 					})
// 				}
// 			}else {
// 				return {
// 					name: levels_1[i][j],
// 					children: []
// 				}
// 			}
// 		}
// 		console.log(x)
// 		return x
// 	} 
// }


/*-----------------working version 1---------------*/
// function buildChildren(i, j){
// 	for (; i < levels_1.length; i++) {
// 		let x = []
// 		let y = []
// 		for (; j < levels_1[i].length; j++) {
// 			if(relation_1[i][j].length){
// 				if(x.length <= relation_1[i][j].length){
// 					x.push({
// 						name: levels_1[i][j],
// 						children: buildChildren(i+1, j)
// 					})
// 				}
// 			}
// 			else x.push({
// 				name: levels_1[i][j],
// 				children: []
// 			})
// 		}
// 		return x
// 	}
// 	return getChildren(relation_1[i-1][j])
// }


console.log('build children',buildChildren(0,0));

function getChildren(arr) {
	return arr.reduce((acc, cur) => {
		return [...acc, { name: cur, children: [] }];
	}, []);
}

let children = []
let children_obj = {}

for(let i = 0; i < levels_1.length; i++) {
	for(let j = 0; j < levels_1[i].length; j++) {
		if(relation_1[i][j].length){
			let x = getChildren(relation_1[i][j]);
			let name = levels_1[i][j];
			let y = {
				name,
				children: x
			}
			children.push(y)
			children_obj[name] = x
		}
	}
}
// console.log(children)
// console.log(children_obj)
/*
	let treeData = {
		name: 'Top Level',
		children: [
			{
				name: 'Level 2: A',
				children: [{ name: 'Son of A' }, { name: 'Daughter of A' }]
			},
			{ name: 'Level 2: B' }
		]
	};
*/


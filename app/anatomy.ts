export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'骨骼系统',color:'#e2d9ba',description:'骨骼构成身体的支撑框架，保护器官，并为肌肉提供附着点。骨内组织还参与矿物质储存与血细胞生成。'},
 {id:'muscular',name:'肌肉系统',color:'#a85b50',description:'骨骼肌通过牵拉附着部位产生运动。肌肉与肌腱共同驱动关节、稳定姿势，并产生热量。'},
 {id:'cardiac',name:'心脏',color:'#b96760',description:'心脏是具有四个腔室的肌性泵。心瓣膜引导血液向前流动，连接肺循环与体循环。'},
 {id:'sensory',name:'感觉器官',color:'#b0c8ce',description:'这些结构参与视觉、听觉和平衡等特殊感觉。专门化组织感受刺激，并与神经系统共同传递信息。'},
 {id:'arterial',name:'动脉系统',color:'#c05245',description:'心脏推动血液循环。动脉将血液从心脏输送至组织；肺循环中的动脉则将血液送往肺。'},
 {id:'venous',name:'静脉系统',color:'#527c9f',description:'静脉将血液送回心脏。浅、深静脉网络收集组织血液；肺静脉将来自肺的富氧血送回心脏。'},
 {id:'nervous',name:'神经系统',color:'#d8b565',description:'脑、脊髓和周围神经传递并处理信号，支持感觉、运动、协调，以及身体功能的自主调节。'},
 {id:'respiratory',name:'呼吸系统',color:'#b98991',description:'气道将空气输送至肺，氧和二氧化碳在肺内空气与血液之间交换。呼吸依靠呼吸肌产生的压力变化完成。'},
 {id:'digestive',name:'消化系统',color:'#b8916b',description:'消化道分解食物、吸收营养和水分，并推动废物排出。附属器官提供胆汁和消化酶。'},
 {id:'urinary',name:'泌尿系统',color:'#b47961',description:'肾过滤血液，调节体液、电解质和酸碱平衡。尿液经输尿管进入膀胱，再通过尿道排出。'},
 {id:'lymphatic',name:'淋巴系统',color:'#879f7c',description:'淋巴管将多余的组织液送回血液循环。淋巴结及其他淋巴器官参与免疫监视和免疫应答。'},
 {id:'endocrine',name:'内分泌系统',color:'#c5a09a',description:'内分泌器官将激素释放到血液中，协调代谢、生长、应激反应和生殖等过程。'},
 {id:'reproductive',name:'生殖系统',color:'#bda098',description:'本模型中的男性生殖结构参与精子的生成、成熟和运输，并参与性激素的产生。'},
 {id:'integumentary',name:'体表与皮肤',color:'#ba9b7d',description:'体表提供外部解剖参照。体被系统形成保护屏障，并参与感觉和体温调节。'},
 {id:'connective',name:'结缔组织',color:'#aec3bb',description:'软骨、韧带和其他结缔组织支撑、连接并分隔各结构，参与关节稳定及机械负荷分配。'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 "right lung": "本图谱的右肺条目聚合了 156 个支气管及肺动、静脉网格。原项目未提供完整肺实质、肺叶外表面或胸膜模型。点击“单独显示结构”可查看这些内部结构；此视图不代表完整肺脏外形。",
 "left lung": "本图谱的左肺条目聚合了 124 个支气管及肺动、静脉网格。原项目未提供完整肺实质、肺叶外表面或胸膜模型。点击“单独显示结构”可查看这些内部结构；此视图不代表完整肺脏外形。",
 "heart": "心脏是位于胸腔内的肌性泵。右心将血液送往肺，左心将血液送入体循环。",
 "liver": "肝是位于膈右侧下方的大型器官，处理吸收的营养物质、产生胆汁，并合成多种血浆蛋白。",
 "brain": "脑是神经系统的中枢器官。相互连接的脑区支持感知、运动、记忆、语言，以及身体功能调节。",
 "stomach": "胃是连接食管与小肠的肌性囊状器官。它储存食物，并将食物与胃酸和消化酶混合后送入十二指肠。",
 "spleen": "脾是位于左上腹的淋巴器官，过滤血液、清除衰老血细胞，并参与免疫反应。",
 "pancreas": "胰腺位于腹部，兼具消化与内分泌功能。它向小肠提供消化酶，并释放胰岛素和胰高血糖素等激素。",
 "urinary bladder": "膀胱是位于盆腔内的肌性储尿器官，储存由肾产生、经输尿管输送的尿液。",
 "trachea": "气管是连接喉与支气管的主要气道。软骨支架帮助气道在呼吸时保持开放。",
 "diaphragm": "膈肌是分隔胸腔与腹腔的宽大肌肉。收缩时胸腔容积增加，有助于空气进入肺。"
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? (/lobe of .*lung|lobe of lung/i.test(name)?'此肺叶条目聚合原项目中对应的支气管及肺血管网格，不包含肺叶实质外表面。可单独显示并展开查看已收录的内部结构。':SYSTEMS.find(s=>s.id===system)?.description) ?? '';}

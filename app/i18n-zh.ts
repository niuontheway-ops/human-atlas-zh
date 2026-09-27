// Chinese display names are separate from the unchanged BodyParts3D catalogue.
// Unresolved specialist names stay in English; no guessed partial translations.
const terms = `
heart|心脏
liver|肝脏
brain|脑
stomach|胃
spleen|脾
pancreas|胰腺
urinary bladder|膀胱
trachea|气管
diaphragm|膈肌
lung|肺
kidney|肾
adrenal gland|肾上腺
thyroid gland|甲状腺
pituitary gland|垂体
thymus|胸腺
esophagus|食管
gallbladder|胆囊
duodenum|十二指肠
jejunum|空肠
ileum|回肠
small intestine|小肠
large intestine|大肠
cecum|盲肠
appendix|阑尾
colon|结肠
ascending colon|升结肠
transverse colon|横结肠
descending colon|降结肠
sigmoid colon|乙状结肠
rectum|直肠
ureter|输尿管
urethra|尿道
prostate|前列腺
testis|睾丸
epididymis|附睾
deferent duct|输精管
seminal vesicle|精囊
glans penis|阴茎头
penis|阴茎
corpus spongiosum|尿道海绵体
corpus cavernosum|阴茎海绵体
skin|皮肤
integument|体被
hair|毛发
eyebrow|眉毛
pubic hair|阴毛
tongue|舌
lip|唇
tooth|牙
incisor tooth|切牙
canine tooth|尖牙
premolar tooth|前磨牙
molar tooth|磨牙
secondary incisor tooth|恒切牙
secondary canine tooth|恒尖牙
secondary premolar tooth|恒前磨牙
secondary molar tooth|恒磨牙
central secondary incisor tooth|恒中切牙
lateral secondary incisor tooth|恒侧切牙
gingiva|牙龈
upper jaw|上颌
lower jaw|下颌
mouth|口
soft palate|软腭
uvula|腭垂
pharynx|咽
laryngopharynx|喉咽
larynx|喉
salivary gland|唾液腺
major salivary gland|大唾液腺
sublingual gland|舌下腺
submandibular gland|下颌下腺
parotid gland|腮腺
eye|眼
eyeball|眼球
iris|虹膜
cornea|角膜
lens|晶状体
sclera|巩膜
choroid|脉络膜
retina|视网膜
ciliary body|睫状体
corona ciliaris|睫状冠
vitreous body|玻璃体
lacrimal gland|泪腺
lacrimal sac|泪囊
lacrimal lake|泪湖
lacrimal canaliculus|泪小管
lacrimal duct|泪道
nasolacrimal duct|鼻泪管
lacrimal apparatus|泪器
eyelid|眼睑
upper eyelid|上睑
lower eyelid|下睑
external ear|外耳
nose|鼻
external nose|外鼻
internal nose|内鼻
nasal septum|鼻中隔
head|头部
head proper|头部本体
neck|颈部
trunk|躯干
thorax|胸部
chest|胸部
abdomen|腹部
abdomen proper|腹部本体
pelvis|骨盆部
perineum|会阴
face|面部
cheek|颊部
orbit|眼眶
upper limb|上肢
lower limb|下肢
free upper limb|自由上肢
free lower limb|自由下肢
limb|肢体
shoulder|肩部
arm|臂
forearm|前臂
hand|手
hand proper|手本体
wrist|腕部
hip|髋部
thigh|大腿
knee|膝部
leg|小腿
foot|足
foot proper|足本体
thumb|拇指
index finger|示指
middle finger|中指
ring finger|环指
little finger|小指
finger|手指
big toe|拇趾
little toe|小趾
toe|足趾
human body|人体
body|身体
body proper|身体本体
skin appendage|皮肤附属器
vascular tree|血管树
artery|动脉
vein|静脉
arteries|动脉
veins|静脉
aorta|主动脉
ascending aorta|升主动脉
arch of aorta|主动脉弓
descending aorta|降主动脉
thoracic aorta|胸主动脉
descending thoracic aorta|降胸主动脉
abdominal aorta|腹主动脉
coronary artery|冠状动脉
coronary sinus|冠状窦
superior vena cava|上腔静脉
inferior vena cava|下腔静脉
pulmonary trunk|肺动脉干
pulmonary arterial trunk|肺动脉干
pulmonary artery|肺动脉
pulmonary vein|肺静脉
superior pulmonary vein|肺上静脉
inferior pulmonary vein|肺下静脉
hepatic portal vein|肝门静脉
portal vein|门静脉
azygos vein|奇静脉
hemiazygos vein|半奇静脉
accessory hemiazygos vein|副半奇静脉
great cardiac vein|心大静脉
middle cardiac vein|心中静脉
small cardiac vein|心小静脉
anterior cardiac vein|心前静脉
anterior interventricular vein|室间前静脉
cephalic vein|头静脉
basilic vein|贵要静脉
great saphenous vein|大隐静脉
small saphenous vein|小隐静脉
median cubital vein|肘正中静脉
median antebrachial vein|前臂正中静脉
brachiocephalic artery|头臂干
thyrocervical trunk|甲状颈干
costocervical trunk|肋颈干
celiac trunk|腹腔干
celiac artery|腹腔动脉
arteria princeps pollicis|拇主要动脉
arteria radialis indicis|示指桡侧动脉
superficial palmar arterial arch|掌浅弓
deep palmar arterial arch|掌深弓
deep palmar arch|掌深弓
superficial palmar venous arch|掌浅静脉弓
deep palmar venous arch|掌深静脉弓
plantar arch|足底弓
plantar venous arch|足底静脉弓
dorsal venous arch|背侧静脉弓
dorsal venous network|背侧静脉网
cerebral arterial circle|大脑动脉环
cardiac chamber|心腔
atrium|心房
ventricle|心室
cardiac valve|心瓣膜
tricuspid valve|三尖瓣
mitral valve|二尖瓣
aortic valve|主动脉瓣
pulmonary valve|肺动脉瓣
papillary muscle|乳头肌
myocardium|心肌
fibrous skeleton|纤维骨架
fibrous ring|纤维环
bronchus|支气管
main bronchus|主支气管
main bronchus proper|主支气管本体
bronchial tree|支气管树
tracheobronchial tree|气管支气管树
bronchopulmonary segment|支气管肺段
apical bronchopulmonary segment|肺尖段
posterior bronchopulmonary segment|肺后段
anterior bronchopulmonary segment|肺前段
medial bronchopulmonary segment|肺内侧段
lateral bronchopulmonary segment|肺外侧段
apicoposterior bronchopulmonary segment|肺尖后段
superior bronchopulmonary segment|肺上段
superior lingular bronchopulmonary segment|肺上舌段
inferior lingular bronchopulmonary segment|肺下舌段
medial basal bronchopulmonary segment|肺内侧底段
anterior basal bronchopulmonary segment|肺前底段
lateral basal bronchopulmonary segment|肺外侧底段
posterior basal bronchopulmonary segment|肺后底段
upper lobe|上叶
middle lobe|中叶
lower lobe|下叶
lobe|叶
caudate lobe|尾状叶
bile duct|胆管
common bile duct|胆总管
common hepatic duct|肝总管
hepatic duct|肝管
cystic duct|胆囊管
extrahepatic bile duct|肝外胆管
pancreatic duct|胰管
biliary tree|胆管树
hepatic biliary tree|肝胆管树
intrahepatic biliary tree|肝内胆管树
peritoneum|腹膜
visceral peritoneum|脏腹膜
peritoneal sac|腹膜囊
mesentery|系膜
peritoneal mesentery|腹膜系膜
mesoappendix|阑尾系膜
transverse mesocolon|横结肠系膜
taenia coli|结肠带
taenia mesocolica|结肠系膜带
taenia omentalis|网膜带
taenia libera|独立带
ileocecal junction|回盲连接处
hemiliver|半肝
mediastinum|纵隔
superior mediastinum|上纵隔
inferior mediastinum|下纵隔
anterior mediastinum|前纵隔
middle mediastinum|中纵隔
posterior mediastinum|后纵隔
body wall|体壁
thoracic wall|胸壁
chest wall|胸壁
pelvic wall|盆壁
anterior abdominal wall|腹前壁
posterior abdominal wall|腹后壁
mons pubis|阴阜
skeletal system|骨骼系统
skeletal system of thorax|胸部骨骼系统
musculoskeletal system|肌肉骨骼系统
axial skeletal system|中轴骨骼系统
skeleton (in vivo)|活体骨骼
skeleton|骨骼
axial skeleton|中轴骨骼
pelvic skeleton|骨盆骨骼
rib cage|胸廓
skull|颅骨
neurocranium|脑颅
viscerocranium|面颅
basicranium|颅底
bone|骨
bone organ|骨器官
long bone|长骨
short bone|短骨
flat bone|扁骨
irregular bone|不规则骨
pneumatized bone|含气骨
sesamoid bone|籽骨
sternum|胸骨
manubrium|胸骨柄
xiphoid process|剑突
rib|肋骨
costal cartilage|肋软骨
true rib|真肋
false rib|假肋
floating rib|浮肋
typical rib|典型肋
atypical rib|非典型肋
vertebra|椎骨
cervical vertebra|颈椎
thoracic vertebra|胸椎
lumbar vertebra|腰椎
cervical vertebrae|颈椎
thoracic vertebrae|胸椎
lumbar vertebrae|腰椎
atlas|寰椎
axis|枢椎
sacrum|骶骨
coccyx|尾骨
vertebral column|脊柱
cervical vertebral column|颈段脊柱
thoracic vertebral column|胸段脊柱
lumbar vertebral column|腰段脊柱
intervertebral disk|椎间盘
intervertebral symphysis|椎间联合
cervical intervertebral symphysis|颈椎间联合
thoracic intervertebral symphysis|胸椎间联合
lumbar intervertebral symphysis|腰椎间联合
clavicle|锁骨
scapula|肩胛骨
humerus|肱骨
radius|桡骨
ulna|尺骨
carpal bone|腕骨
scaphoid|手舟骨
lunate|月骨
triquetral|三角骨
pisiform|豌豆骨
trapezium|大多角骨
trapezoid|小多角骨
capitate|头状骨
hamate|钩骨
metacarpal bone|掌骨
phalanx|指（趾）骨
proximal phalanx|近节指（趾）骨
middle phalanx|中节指（趾）骨
distal phalanx|远节指（趾）骨
hip bone|髋骨
bony pelvis|骨盆
pelvic girdle|下肢带
pectoral girdle|上肢带
bony pectoral girdle|上肢带骨
femur|股骨
patella|髌骨
tibia|胫骨
fibula|腓骨
tarsal bone|跗骨
talus|距骨
calcaneus|跟骨
navicular bone|舟骨
cuboid bone|骰骨
cuneiform bone|楔骨
metatarsal bone|跖骨
frontal bone|额骨
parietal bone|顶骨
occipital bone|枕骨
temporal bone|颞骨
sphenoid bone|蝶骨
ethmoid|筛骨
lacrimal bone|泪骨
nasal bone|鼻骨
zygomatic bone|颧骨
palatine bone|腭骨
maxilla|上颌骨
mandible|下颌骨
vomer|犁骨
inferior nasal concha|下鼻甲
hyoid bone|舌骨
cartilage|软骨
cartilage organ|软骨器官
cricoid cartilage|环状软骨
thyroid cartilage|甲状软骨
arytenoid cartilage|杓状软骨
corniculate cartilage|小角软骨
cuneiform cartilage|楔状软骨
epiglottis|会厌
laryngeal cartilage|喉软骨
nasal cartilage|鼻软骨
septal nasal cartilage|鼻中隔软骨
major alar cartilage|大翼软骨
lateral nasal cartilage|鼻外侧软骨
tendon|肌腱
ligament|韧带
ligament organ|韧带器官
skeletal ligament|骨骼韧带
nonskeletal ligament|非骨骼韧带
interosseous membrane|骨间膜
retinaculum|支持带
flexor retinaculum|屈肌支持带
calcaneal tendon|跟腱
iliotibial tract|髂胫束
fascia lata|阔筋膜
investing fascia|包被筋膜
long plantar ligament|足底长韧带
tarsal ligament|跗骨韧带
thyrohyoid membrane|甲状舌骨膜
thyrohyoid ligament|甲状舌骨韧带
hyo-epiglottic ligament|舌骨会厌韧带
thyro-epiglottic ligament|甲状会厌韧带
cricothyroid ligament|环甲韧带
vocal ligament|声韧带
stylohyoid ligament|茎突舌骨韧带
conus elasticus|弹性圆锥
pharyngeal raphe|咽缝
pterygomandibular raphe|翼下颌缝
linea alba|腹白线
common tendinous ring|总腱环
suspensory ligament|悬韧带
check ligament|节制韧带
tarsal plate|睑板
muscle|肌
muscle organ|肌器官
musculature|肌群
striated muscle|横纹肌
trapezius|斜方肌
deltoid|三角肌
pectoralis major|胸大肌
pectoralis minor|胸小肌
latissimus dorsi|背阔肌
sternocleidomastoid|胸锁乳突肌
stylohyoid|茎突舌骨肌
sternohyoid|胸骨舌骨肌
omohyoid|肩胛舌骨肌
sternothyroid|胸骨甲状肌
thyrohyoid|甲状舌骨肌
suprahyoid muscle|舌骨上肌
infrahyoid muscle|舌骨下肌
digastric|二腹肌
mylohyoid|下颌舌骨肌
geniohyoid|颏舌骨肌
platysma|颈阔肌
scalenus anterior|前斜角肌
scalenus medius|中斜角肌
scalenus posterior|后斜角肌
scalene muscle|斜角肌
subclavius|锁骨下肌
supraspinatus|冈上肌
infraspinatus|冈下肌
infraspinatus muscle|冈下肌
subscapularis|肩胛下肌
teres major|大圆肌
teres minor|小圆肌
levator scapulae|肩胛提肌
rhomboid major|大菱形肌
rhomboid minor|小菱形肌
serratus anterior|前锯肌
serratus posterior|后锯肌
serratus posterior superior|上后锯肌
serratus posterior inferior|下后锯肌
intercostal muscle|肋间肌
external intercostal muscle|肋间外肌
internal intercostal muscle|肋间内肌
innermost intercostal muscle|肋间最内肌
transversus thoracis|胸横肌
external oblique|腹外斜肌
internal oblique|腹内斜肌
rectus abdominis|腹直肌
transversus abdominis|腹横肌
psoas major|腰大肌
iliacus|髂肌
piriformis|梨状肌
obturator muscle|闭孔肌
obturator internus|闭孔内肌
obturator externus|闭孔外肌
gluteus maximus|臀大肌
gluteus medius|臀中肌
gluteus minimus|臀小肌
gluteal muscle|臀肌
gemellus|孖肌
gemellus superior|上孖肌
gemellus inferior|下孖肌
quadratus femoris|股方肌
sartorius|缝匠肌
semitendinosus|半腱肌
semimembranosus|半膜肌
tensor fasciae latae|阔筋膜张肌
quadriceps femoris|股四头肌
rectus femoris|股直肌
vastus lateralis|股外侧肌
vastus medialis|股内侧肌
vastus intermedius|股中间肌
pectineus|耻骨肌
adductor longus|长收肌
adductor brevis|短收肌
adductor magnus|大收肌
adductor minimus|小收肌
gracilis|股薄肌
biceps femoris|股二头肌
tibialis anterior|胫骨前肌
tibialis posterior|胫骨后肌
fibularis tertius|第三腓骨肌
fibularis longus|腓骨长肌
fibularis brevis|腓骨短肌
soleus|比目鱼肌
plantaris|跖肌
popliteus|腘肌
gastrocnemius|腓肠肌
extensor hallucis longus|拇长伸肌
extensor hallucis brevis|拇短伸肌
extensor digitorum longus|趾长伸肌
flexor hallucis longus|拇长屈肌
flexor hallucis brevis|拇短屈肌
flexor digitorum longus|趾长屈肌
flexor digitorum brevis|趾短屈肌
abductor hallucis|拇展肌
adductor hallucis|拇收肌
flexor accessorius|足底方肌
coracobrachialis|喙肱肌
brachialis|肱肌
biceps brachii|肱二头肌
triceps brachii|肱三头肌
anconeus|肘肌
pronator quadratus|旋前方肌
pronator teres|旋前圆肌
supinator|旋后肌
flexor carpi radialis|桡侧腕屈肌
flexor carpi ulnaris|尺侧腕屈肌
palmaris longus|掌长肌
flexor digitorum superficialis|指浅屈肌
flexor digitorum profundus|指深屈肌
flexor pollicis longus|拇长屈肌
brachioradialis|肱桡肌
extensor carpi radialis longus|桡侧腕长伸肌
extensor carpi radialis brevis|桡侧腕短伸肌
extensor carpi ulnaris|尺侧腕伸肌
extensor digitorum|指伸肌
extensor digiti minimi|小指伸肌
abductor pollicis longus|拇长展肌
abductor pollicis brevis|拇短展肌
extensor pollicis brevis|拇短伸肌
extensor pollicis longus|拇长伸肌
extensor indicis|示指伸肌
flexor pollicis brevis|拇短屈肌
opponens pollicis|拇对掌肌
adductor pollicis|拇收肌
abductor digiti minimi|小指（趾）展肌
flexor digiti minimi brevis|小指（趾）短屈肌
opponens digiti minimi|小指（趾）对掌肌
lumbrical|蚓状肌
lumbricals|蚓状肌
interosseous|骨间肌
plantar interosseous|足底骨间肌
palmar interossei|骨间掌侧肌
dorsal interossei|骨间背侧肌
thenar muscle|鱼际肌
hypothenar muscle|小鱼际肌
splenius|夹肌
splenius capitis|头夹肌
splenius cervicis|颈夹肌
iliocostalis|髂肋肌
iliocostalis lumborum|腰髂肋肌
iliocostalis thoracis|胸髂肋肌
iliocostalis cervicis|颈髂肋肌
longissimus|最长肌
longissimus thoracis|胸最长肌
longissimus cervicis|颈最长肌
longissimus capitis|头最长肌
spinalis|棘肌
spinalis thoracis|胸棘肌
semispinalis|半棘肌
semispinalis thoracis|胸半棘肌
semispinalis cervicis|颈半棘肌
semispinalis capitis|头半棘肌
interspinalis muscle|棘间肌
interspinalis thoracis|胸棘间肌
interspinales lumborum|腰棘间肌
interspinales cervicis|颈棘间肌
intertransversarius muscle|横突间肌
lumbar intertransversarius|腰横突间肌
anterior cervical intertransversarii|颈前横突间肌
posterior cervical intertransversarii|颈后横突间肌
levatores costarum longi|长肋提肌
levatores costarum breves|短肋提肌
rotator muscle|回旋肌
cervical rotator|颈回旋肌
thoracic rotator|胸回旋肌
lumbar rotator|腰回旋肌
rectus capitis posterior major|头后大直肌
rectus capitis posterior minor|头后小直肌
obliquus capitis superior|头上斜肌
obliquus capitis inferior|头下斜肌
longus colli|颈长肌
longus capitis|头长肌
rectus capitis anterior|头前直肌
rectus capitis lateralis|头外侧直肌
levator ani|肛提肌
coccygeus|尾骨肌
pubococcygeus|耻骨尾骨肌
puborectalis|耻骨直肠肌
iliococcygeus|髂骨尾骨肌
external anal sphincter|肛门外括约肌
posterior crico-arytenoid|环杓后肌
lateral crico-arytenoid|环杓侧肌
transverse arytenoid|杓横肌
oblique arytenoid|杓斜肌
thyro-arytenoid|甲杓肌
vocalis|声带肌
aryepiglotticus|杓会厌肌
cricothyroid|环甲肌
superior pharyngeal constrictor|咽上缩肌
middle pharyngeal constrictor|咽中缩肌
inferior pharyngeal constrictor|咽下缩肌
stylopharyngeus|茎突咽肌
salpingopharyngeus|咽鼓管咽肌
palatopharyngeus|腭咽肌
genioglossus|颏舌肌
hyoglossus|舌骨舌肌
levator veli palatini|腭帆提肌
tensor veli palatini|腭帆张肌
uvular muscle|腭垂肌
extra-ocular muscle|眼外肌
superior rectus|上直肌
inferior rectus|下直肌
medial rectus|内直肌
lateral rectus|外直肌
superior oblique|上斜肌
inferior oblique|下斜肌
levator palpebrae superioris|上睑提肌
nerve|神经
cranial nerve|脑神经
optic nerve|视神经
oculomotor nerve|动眼神经
trochlear nerve|滑车神经
trigeminal nerve|三叉神经
abducens nerve|展神经
facial nerve|面神经
vestibulocochlear nerve|前庭蜗神经
glossopharyngeal nerve|舌咽神经
vagus nerve|迷走神经
accessory nerve|副神经
hypoglossal nerve|舌下神经
olfactory nerve|嗅神经
ophthalmic nerve|眼神经
lacrimal nerve|泪腺神经
frontal nerve|额神经
nasociliary nerve|鼻睫神经
supratrochlear nerve|滑车上神经
infratrochlear nerve|滑车下神经
supra-orbital nerve|眶上神经
anterior ethmoidal nerve|筛前神经
posterior ethmoidal nerve|筛后神经
short ciliary nerve|睫状短神经
long ciliary nerve|睫状长神经
ganglion|神经节
autonomic ganglion|自主神经节
parasympathetic ganglion|副交感神经节
cranial parasympathetic ganglion|颅部副交感神经节
ciliary ganglion|睫状神经节
spinal cord|脊髓
brainstem|脑干
cerebellum|小脑
pons|脑桥
medulla oblongata|延髓
midbrain|中脑
forebrain|前脑
hindbrain|菱脑
telencephalon|端脑
diencephalon|间脑
metencephalon|后脑
epithalamus|上丘脑
thalamus|丘脑
hypothalamus|下丘脑
intermediate hypothalamic region|下丘脑中间区
habenula|缰
pineal body|松果体
optic chiasm|视交叉
optic tract|视束
hippocampus|海马
hippocampal formation|海马结构
caudate nucleus|尾状核
putamen|壳核
globus pallidus|苍白球
amygdala|杏仁核
internal capsule|内囊
corpus callosum|胼胝体
fornix|穹隆
stria terminalis|终纹
lamina terminalis|终板
anterior commissure|前连合
posterior commissure|后连合
lateral geniculate body|外侧膝状体
medial geniculate body|内侧膝状体
tuber cinereum|灰结节
mammillary body|乳头体
superior colliculus|上丘
inferior colliculus|下丘
midbrain tectum|中脑顶盖
cerebral hemisphere|大脑半球
cerebral cortex|大脑皮质
prefrontal cortex|前额叶皮质
archicortex|原皮质
cerebral white matter|大脑白质
white matter|白质
gray matter|灰质
frontal lobe|额叶
parietal lobe|顶叶
temporal lobe|颞叶
occipital lobe|枕叶
limbic lobe|边缘叶
insula|岛叶
superior frontal gyrus|额上回
middle frontal gyrus|额中回
inferior frontal gyrus|额下回
precentral gyrus|中央前回
postcentral gyrus|中央后回
superior temporal gyrus|颞上回
middle temporal gyrus|颞中回
inferior temporal gyrus|颞下回
supramarginal gyrus|缘上回
angular gyrus|角回
superior parietal lobule|顶上小叶
fusiform gyrus|梭状回
parahippocampal gyrus|海马旁回
cingulate gyrus|扣带回
orbital gyrus|眶回
precentral sulcus|中央前沟
postcentral sulcus|中央后沟
central sulcus|中央沟
lateral ventricle|侧脑室
third ventricle|第三脑室
fourth ventricle|第四脑室
cerebral aqueduct|中脑水管
interventricular foramen|室间孔
central canal|中央管
ventricular system|脑室系统
dura mater|硬脑（脊）膜
cranial dura mater|硬脑膜
tentorium cerebelli|小脑幕
subarachnoid space|蛛网膜下隙
interpeduncular fossa|脚间窝
neuraxis|神经中轴
nervous system|神经系统
autonomic nervous system|自主神经系统
parasympathetic nervous system|副交感神经系统
respiratory system|呼吸系统
urinary system|泌尿系统
genital system|生殖系统
cardiovascular system|心血管系统
alimentary system|消化系统
endocrine system|内分泌系统
integumentary system|体被系统
pulmonary vascular system|肺血管系统
systemic arterial system|体循环动脉系统
systemic venous system|体循环静脉系统
portal venous system|门静脉系统
respiratory tract|呼吸道
lower respiratory tract|下呼吸道
urinary tract|尿路
upper urinary tract|上尿路
lower urinary tract|下尿路
gastrointestinal tract|胃肠道
upper gastrointestinal tract|上消化道
lower gastrointestinal tract|下消化道
pancreaticobiliary system|胰胆系统
connective tissue|结缔组织
loose connective tissue|疏松结缔组织
irregular connective tissue|不规则结缔组织
mucoid tissue|黏液组织
parenchyma|实质
tissue|组织
epithelium|上皮
epidermis|表皮
organ|器官
organ component|器官组成部分
organ part|器官部分
organ region|器官区域
organ zone|器官分区
organ cavity|器官腔
organ chamber|器官腔室
organ segment|器官节段
anatomical structure|解剖结构
anatomical entity|解剖实体
anatomical cavity|解剖腔隙
anatomical space|解剖间隙
anatomical junction|解剖连接处
anatomical line|解剖线
anatomical set|解剖集合
anatomical cluster|解剖结构群
anatomical lobe|解剖叶
anastomosis|吻合
vascular anastomosis|血管吻合
arterial anastomosis|动脉吻合
venous anastomosis|静脉吻合
arterial trunk|动脉干
venous trunk|静脉干
nerve trunk|神经干
duct|管道
decussation|交叉
membrane|膜
serous membrane|浆膜
membrane organ|膜性器官
cavernous organ|海绵体器官
lobular organ|分叶器官
solid organ|实质性器官
parenchymatous organ|实质性器官
nonparenchymatous organ|非实质性器官
organ component layer|器官组成层
organ component cluster|器官组成部分群
organ part cluster|器官部分群
body compartment|身体分区
orbital compartment|眶腔
pulmopleural compartment|肺胸膜腔室
body cavity content|体腔内容物
orbital content|眶内容物
deep fascial system|深筋膜系统
muscle layer|肌层
fibrous layer|纤维层
vascular layer|血管层
subendocardial layer|心内膜下层
free wall|游离壁
inflow part|流入部
outflow part|流出部
posterior limb|后肢
basal ganglion|基底神经节
choroid plexus|脉络丛
stria medullaris|髓纹
commissure|连合
cortex|皮质
subcortex|皮质下区
brachium|臂
peduncle|脚
septum|隔
lamina|板
stria|纹
gyrus|回
nucleus|核
lobule|小叶
trochlea|滑车
root|根
dorsum|背
wall|壁
cavity|腔
body|体
head|头
neck|颈
branch|分支
tributary|属支
segment|节段
subdivision|分部
region|区域
zone|分区
part|部分
portion|部分
layer|层
content|内容物
compartment|腔室
sector|区
side|侧
leaflet|瓣叶
leaf|瓣叶
cusp|瓣尖
back|背部
set|组
tendinous arch|腱弓
cartilaginous skeleton|软骨骨架
osseous skeleton|骨性骨架
bony part|骨部
cartilaginous part|软骨部
flexor digiti minimi brevis of hand|小指短屈肌
flexor digiti minimi brevis of foot|小趾短屈肌
opponens digiti minimi of hand|小指对掌肌
opponens digiti minimi of foot|小趾对跖肌
abductor digiti minimi of hand|小指展肌
abductor digiti minimi of foot|小趾展肌
`.trim();

const dictionary: Record<string,string> = Object.fromEntries(terms.split('\n').map(line=>line.split('|')));
// These are established compound stems, used only before artery/vein.
const vessels = `
brachiocephalic|头臂
common carotid|颈总
internal carotid|颈内
external carotid|颈外
subclavian|锁骨下
vertebral|椎
internal thoracic|胸廓内
superior epigastric|腹壁上
inferior epigastric|腹壁下
superficial epigastric|腹壁浅
dorsal scapular|肩胛背
posterior intercostal|肋间后
anterior intercostal|肋间前
subcostal|肋下
superior intercostal|最上肋间
supreme intercostal|最上肋间
musculophrenic|肌膈
deep cervical|颈深
inferior thyroid|甲状腺下
superior thyroid|甲状腺上
suprascapular|肩胛上
transverse cervical|颈横
superficial cervical|颈浅
esophageal|食管
bronchial|支气管
internal jugular|颈内
external jugular|颈外
ascending lumbar|腰升
lumbar|腰
cardiac|心
marginal|缘
splenic|脾
superior mesenteric|肠系膜上
inferior mesenteric|肠系膜下
common iliac|髂总
external iliac|髂外
internal iliac|髂内
iliolumbar|髂腰
lateral sacral|骶外侧
median sacral|骶正中
superior gluteal|臀上
inferior gluteal|臀下
obturator|闭孔
internal pudendal|阴部内
superficial external pudendal|阴部外浅
renal|肾
hepatic|肝
common hepatic|肝总
testicular|睾丸
suprarenal|肾上腺
superior suprarenal|肾上腺上
middle suprarenal|肾上腺中
inferior suprarenal|肾上腺下
inferior phrenic|膈下
superior phrenic|膈上
gastric|胃
gastro-epiploic|胃网膜
gastroepiploic|胃网膜
gastroduodenal|胃十二指肠
pancreaticoduodenal|胰十二指肠
anterior superior pancreaticoduodenal|胰十二指肠上前
posterior superior pancreaticoduodenal|胰十二指肠上后
anterior inferior pancreaticoduodenal|胰十二指肠下前
posterior inferior pancreaticoduodenal|胰十二指肠下后
superior pancreaticoduodenal|胰十二指肠上
inferior pancreaticoduodenal|胰十二指肠下
pancreatic|胰
dorsal pancreatic|胰背
inferior pancreatic|胰下
great pancreatic|胰大
caudal pancreatic|胰尾
ileal|回肠
middle colic|结肠中
right colic|结肠右
left colic|结肠左
ileocolic|回结肠
anterior cecal|盲肠前
posterior cecal|盲肠后
appendicular|阑尾
marginal colic|结肠缘
sigmoid|乙状结肠
superior rectal|直肠上
lateral circumflex femoral|旋股外侧
medial circumflex femoral|旋股内侧
femoral|股
deep femoral|股深
descending genicular|膝降
superior genicular|膝上
inferior genicular|膝下
middle genicular|膝中
superior medial genicular|膝上内侧
medial superior genicular|膝上内侧
superior lateral genicular|膝上外侧
lateral superior genicular|膝上外侧
inferior medial genicular|膝下内侧
inferior lateral genicular|膝下外侧
axillary|腋
lateral thoracic|胸外侧
subscapular|肩胛下
anterior circumflex humeral|旋肱前
posterior circumflex humeral|旋肱后
circumflex scapular|旋肩胛
thoracodorsal|胸背
thoraco-acromial|胸肩峰
brachial|肱
deep brachial|肱深
superior ulnar collateral|尺侧上副
inferior ulnar collateral|尺侧下副
radial|桡
ulnar|尺
radial recurrent|桡侧返
anterior ulnar recurrent|尺侧返前
posterior ulnar recurrent|尺侧返后
ulnar recurrent|尺侧返
common interosseous|骨间总
anterior interosseous|骨间前
posterior interosseous|骨间后
recurrent interosseous|骨间返
common palmar digital|指掌侧总
proper palmar digital|指掌侧固有
palmar metacarpal|掌心
dorsal metacarpal|掌背
medial collateral|内侧副
radial collateral|桡侧副
middle collateral|中副
anterior tibial|胫前
posterior tibial|胫后
anterior tibial recurrent|胫前返
dorsalis pedis|足背
medial plantar|足底内侧
lateral plantar|足底外侧
deep plantar|足底深
plantar metatarsal|跖底
fibular|腓
genicular|膝
popliteal|腘
arcuate|弓状
lateral tarsal|跗外侧
dorsal digital|趾背
digital|趾
ophthalmic|眼
anterior cerebral|大脑前
middle cerebral|大脑中
posterior cerebral|大脑后
posterior communicating|后交通
anterior communicating|前交通
anterior choroidal|脉络膜前
posterior choroidal|脉络膜后
posterior medial choroidal|脉络膜后内侧
medial frontobasal|额底内侧
lateral frontobasal|额底外侧
callosomarginal|胼周缘
pericallosal|胼周
polar temporal|颞极
anterior temporal|颞前
middle temporal|颞中
posterior temporal|颞后
temporal|颞
prefrontal|前额
anterior parietal|顶前
posterior parietal|顶后
posterior inferior cerebellar|小脑后下
anterior inferior cerebellar|小脑前下
superior cerebellar|小脑上
anterior spinal|脊髓前
basilar|基底
pontine|脑桥
thalamoperforating|丘脑穿通
thalamogeniculate|丘脑膝状体
lateral occipital|枕外侧
medial occipital|枕内侧
splenial|胼胝体压部
conus|动脉圆锥
segmental pulmonary|肺段
subsegmental pulmonary|肺亚段
intrapulmonary|肺内
apical segmental|尖段
anterior segmental|前段
posterior segmental|后段
medial segmental|内侧段
lateral segmental|外侧段
superior segmental|上段
basal segmental|底段
medial basal segmental|内侧底段
anterior basal segmental|前底段
lateral basal segmental|外侧底段
posterior basal segmental|后底段
antero-medial basal segmental|前内侧底段
apicoposterior segmental|尖后段
upper lobar|上叶
middle lobar|中叶
lower lobar|下叶
lobar|叶
superior lingular|上舌
inferior lingular|下舌
lingular|舌叶
common basal|底总
superior basal|底上
inferior basal|底下
segmental renal|肾段
systemic|体循环
thyrocervical|甲状颈
costocervical|肋颈
`.trim();
for(const line of vessels.split('\n')){const [en,zh]=line.split('|');dictionary[`${en} artery`]=`${zh}动脉`;dictionary[`${en} vein`]=`${zh}静脉`;}
const prefixes:Record<string,string>={left:'左',right:'右',first:'第1',second:'第2',third:'第3',fourth:'第4',fifth:'第5',sixth:'第6',seventh:'第7',eighth:'第8',ninth:'第9',tenth:'第10',eleventh:'第11',twelfth:'第12',anterior:'前',posterior:'后',superior:'上',inferior:'下',medial:'内侧',lateral:'外侧',intermediate:'中间',middle:'中',upper:'上',lower:'下',proximal:'近侧',distal:'远侧',superficial:'浅',deep:'深',ascending:'升',descending:'降',transverse:'横',oblique:'斜',straight:'直',vertical:'垂直',short:'短',long:'长',apical:'尖',basal:'底',apicoposterior:'尖后',anterolateral:'前外侧',posteromedial:'后内侧',inferomedial:'下内侧',segmental:'段',subsegmental:'亚段',dorsal:'背侧',ventral:'腹侧',external:'外',internal:'内',intrinsic:'内在',extrinsic:'外在',perineal:'会阴',abdominal:'腹',thoracic:'胸',cervical:'颈',lumbar:'腰',clavicular:'锁骨',acromial:'肩峰',spinal:'脊柱',sternocostal:'胸肋',humeral:'肱骨',ulnar:'尺骨',radial:'桡骨',palmar:'掌侧',plantar:'足底',pectoral:'胸',scapular:'肩胛',orbital:'眶',nasal:'鼻',frontal:'额',parietal:'顶',occipital:'枕',temporal:'颞',sphenoid:'蝶骨',insular:'岛叶',intrapulmonary:'肺内',intracranial:'颅内',caudate:'尾状',terminal:'终末',communicating:'交通',precommunicating:'交通前',postcommunicating:'交通后',accessory:'副',variant:'变异',central:'中央',median:'正中',prevertebral:'椎前',postvertebral:'椎后',suboccipital:'枕下',constrictor:'缩',outflow:'流出',inflow:'流入',fibrous:'纤维',bony:'骨性',cartilaginous:'软骨性',osseous:'骨性',free:'游离',proper:'固有'};
Object.assign(dictionary,{
 'anterior interventricular branch':'室间前支','posterior interventricular branch':'室间后支',
 'anterior interventricular artery':'室间前动脉','posterior interventricular artery':'室间后动脉',
 'anterior ventricular branch':'前心室支','posterior ventricular branch':'后心室支','ventricular branch':'心室支',
 'marginal branch':'缘支','septal branch':'间隔支','diagonal branch':'对角支','conus branch':'圆锥支','circumflex branch':'旋支',
 'caudate lobe branch':'尾状叶支','caudate lobe tributary':'尾状叶属支','dorsal carpal branch':'腕背支',
 'deltoid branch':'三角肌支','radial collateral branch':'桡侧副支','middle collateral branch':'中副支',
 'hepatic artery proper':'肝固有动脉','external iliac artery proper':'髂外动脉本干','coeliac artery':'腹腔动脉',
 'palate':'腭','chamber':'腔室','capsule':'囊','space':'间隙','division':'分部',
 'organ component gland':'器官组成腺体','cartilage organ component':'器官软骨成分',
 'organ cavity subdivision':'器官腔分部','venous tree organ':'静脉树器官','arterial tree organ':'动脉树器官',
 'vascular tree organ':'血管树器官','neural tree organ':'神经树器官','pulmonary venous tree organ':'肺静脉树器官',
 'pulmonary arterial tree':'肺动脉树','portal venous tree':'门静脉树','systemic arterial tree':'体循环动脉树',
 'systemic venous tree':'体循环静脉树','coronary sinus tree':'冠状窦树','anterior cardiac venous tree':'心前静脉树',
 'systemic arterial trunk':'体循环动脉干','superior vena caval tree':'上腔静脉树','inferior vena caval tree':'下腔静脉树',
 'upper lobe part':'上叶部分','middle lobe part':'中叶部分','lower lobe part':'下叶部分',
 'right lobe branch':'右叶支','left lobe branch':'左叶支','pancreatic duct tree':'胰管树',
 'superior lingular bronchial tree':'上舌段支气管树','inferior lingular bronchial tree':'下舌段支气管树',
 'pre-hepatic portal vein':'肝前门静脉','bronchial branch':'支气管支','ileal branch':'回肠支',
 'hypothalamic branch':'下丘脑支','temporo-occipital branch':'颞枕支','precuneal branch':'楔前叶支',
 'paracentral branch':'中央旁支','intermediomedial branch':'中内侧支','superior vermian branch':'小脑蚓上支',
 'subdivisionof autonomic nervous system':'自主神经系统分部','vasculature':'血管系统',
 'myocardial zone 4':'心肌第4区','myocardial zone 11':'心肌第11区','myocardial zone 12':'心肌第12区',
 'right ventricle proper':'右心室本体','left ventricle proper':'左心室本体',
 'optic part':'视部','septal leaflet':'隔侧瓣叶','septal papillary muscle':'隔侧乳头肌',
 'perforating artery':'穿支动脉','perforating arteries':'穿支动脉','perforating veins':'穿支静脉',
 'hairs':'毛发','organs':'器官','organ regions':'器官区域','organ parts':'器官部分',
 'posterior intercostal arteries':'肋间后动脉','dorsal metacarpal arteries':'掌背动脉',
 'dorsal digital arteries':'指（趾）背动脉','dorsal digital veins':'指（趾）背静脉',
 'anterior intercostal veins':'肋间前静脉','common plantar digital arteries':'趾底总动脉',
 'plantar digital veins':'趾底静脉','plantar digital arteries proper':'趾底固有动脉',
 'posterior temporal branches':'颞后支','oesophageal branches':'食管支','calcaneal branches':'跟支',
 'membrane organ component':'器官膜成分','ligament organ component':'器官韧带成分',
 'membranous layer':'膜层','anatomical compartment space':'解剖腔室间隙',
 'internal gray matter component':'内部灰质成分','subarachnoid incisure':'蛛网膜下切迹',
 'nuclear complex':'核复合体','circumventricular organ':'室周器官',
 'branch of anterior choroidal artery to posterior limb of internal capsule':'脉络膜前动脉至内囊后肢的分支',
 'branch of middle cerebral artery to angular gyrus':'大脑中动脉至角回的分支',
});
Object.assign(prefixes,{ureteric:'输尿管',cerebral:'大脑',anal:'肛',sternal:'胸骨',mandibular:'下颌',maxillary:'上颌',faucial:'咽峡',patellar:'髌',basicranial:'颅底',pulmonary:'肺',facial:'面部'});
const cache=new Map<string,string|null>();
export function chineseName(name:string):string|null{
 const key=name.toLowerCase().trim();
 if(cache.has(key))return cache.get(key)!;
 let value=dictionary[key]??null;
 if(!value){const of=key.indexOf(' of ');if(of>0){const partKey=key.slice(0,of),ownerKey=key.slice(of+4),owner=chineseName(ownerKey);let part=partKey==='trunk'?'干':chineseName(partKey);if(part&&/\b(toe|foot)\b/.test(ownerKey))part=part.replaceAll('指（趾）','趾').replace('对掌肌','对跖肌');else if(part&&/\b(finger|thumb|hand)\b/.test(ownerKey))part=part.replaceAll('指（趾）','指');if(owner&&part)value=owner+part;}}
 if(!value){const split=key.indexOf(' '),prefix=prefixes[key.slice(0,split)];if(split>0&&prefix){const rest=chineseName(key.slice(split+1));if(rest)value=prefix+rest;}}
 cache.set(key,value);return value;
}
export function displayName(name:string|undefined):string{if(!name)return '';const zh=chineseName(name);return zh?`${zh} · ${name}`:name;}
export function searchName(name:string):string{return `${name} ${chineseName(name)??''}`.toLowerCase();}

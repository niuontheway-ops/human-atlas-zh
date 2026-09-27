# 壶兰呼吸 · 人体三维解剖图谱

[打开在线图谱](https://niuontheway-ops.github.io/human-atlas-zh/) · [原项目](https://github.com/ashemag/human-atlas)

原作者：**Ashe Magalhaes（ashemag）**  
**汉化by 莆田学院附属医院 呼吸科 老崔**

基于 Human Atlas 的中文版本，保留壶兰呼吸正式 LOGO、原英文名称与结构编号。支持中英文搜索、15 个系统图层、三维旋转缩放、拆解与结构隔离，适配桌面和手机。包含 2,234 个网格、3,432 个命名概念。

## 手机扫码访问

![手机访问二维码](share/mobile-qr.png)

首次加载约 33 MB 压缩模型，需要联网。此在线网站不承诺断网后可用；单独交付的完整离线包通过本地启动器运行。

## 肺部模型范围

搜索“肺”“肺脏”或选择左右肺，再点击“单独显示结构”，可查看原模型中的支气管与肺血管。右肺概念含156个网格，左肺124个；原项目没有完整肺实质外形、肺叶表面及胸膜网格。中文名称使用术语词典及组合规则，少量未确定专名保留英文，尚未逐项人工校订。本图谱用于解剖教育参考。

## 源码与构建

需要 Node.js 22.13 或更高版本。

```sh
npm ci
npm run check
node scripts/validate-atlas.mjs
node scripts/validate-interactions.mjs
npm run build:pages
```

GitHub Pages 从 main 分支的 docs 目录发布。修改源码后运行 build:pages，并将源码和 docs 一起提交。普通本地静态版本使用 npm run build，输出在 dist。所有运行资源均随仓库提供，无需 API key 或账号。

## 来源与许可

上游固定提交：1c38bf35c254a891200d3cedecfd57abebe83d8d。原版说明见 [UPSTREAM-README.md](UPSTREAM-README.md)。

- 程序沿用 [MIT 许可证](LICENSE)，原作者版权声明保留。
- BodyParts3D 数据 © The Database Center for Life Science，采用 CC BY 4.0，详细来源及改动见 [数据署名](public/ATTRIBUTION.md)。模型几何未修改。
- 壶兰呼吸品牌图由本版本提供方授权用于本项目展示；不将第三方品牌权利视为 MIT 授权。
- 组件许可证见 [THIRD-PARTY-NOTICES.txt](THIRD-PARTY-NOTICES.txt)。

测试包括类型检查、模型完整性、桌面/手机交互与项目子路径加载；实体手机与 iPad 性能可能有差异。原依赖锁审计存在11个包级告警，未声称全部修复；发布内容为静态网页。

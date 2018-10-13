Editor.Panel.extend({
    style: `
        :host {
            padding: 4px;
            display: flex;
            flex-direction: column;
        }
        .main-wrap{
            flex: 1;
            display: flex;
        }
        .containerbox{
            width: 320px;
            display: flex;
            flex-direction: column;
        }
        .listbox{
            width: 180px;
            overflow-x: hidden;
        }
        .label{
            width: 54px;
            text-align: right;
            margin-right: 5px;
            line-height: 20px;
        }
        .line{
            display: flex;
            margin-bottom:4px;
        }
        .fill{
            flex: 1;
        }
        .checkbox{
            margin-top: 2px;
        }
        .previewimg-wrap{
            flex: 1;
            display: flex;
            flex-direction: column;
            background-repeat: repeat;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAIAAAD2HxkiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGr2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTgtMDctMjdUMTE6MTg6MzkrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE4LTA3LTI3VDEyOjUyOjI5KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE4LTA3LTI3VDEyOjUyOjI5KzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMwMjllMTExLTQwYzYtNTc0Ni1hMzRhLTNhY2JmYjFjOTkxMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMjE0QkE4NjkxNEIxMUU4QjlEQUNDOUYxOTczQzlDRCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkMyMTRCQTg2OTE0QjExRThCOURBQ0M5RjE5NzNDOUNEIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzIxNEJBODM5MTRCMTFFOEI5REFDQzlGMTk3M0M5Q0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzIxNEJBODQ5MTRCMTFFOEI5REFDQzlGMTk3M0M5Q0QiLz4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGE5ZDljNjMtYjljMi03MTQ3LTg2Y2EtNzJiMjQ4YzRkOWNmIiBzdEV2dDp3aGVuPSIyMDE4LTA3LTI3VDExOjU1OjIxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMDI5ZTExMS00MGM2LTU3NDYtYTM0YS0zYWNiZmIxYzk5MTMiIHN0RXZ0OndoZW49IjIwMTgtMDctMjdUMTI6NTI6MjkrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kEMLTgAAA9lJREFUeJzt3LENhDAUBUFAdOT+S3BNpgJIkNiTbiZFL1z9BHlfa2335pwPX8cYtra2L7fHwzfgAyKEmAghJkKIiRBiIoSYCCEmQoiJEGLnb/5DYGv7P1uXEGIihJgIISZCiIkQYiKEmAghJkKIiRBiuzdmbG3brUsIMRFCTIQQEyHERAgxEUJMhBATIcRECDFvzNjaxluXEGIihJgIISZCiIkQYiKEmAghJkKIiRBi3pixtY23LiHERAgxEUJMhBATIcRECDERQkyEEBMhxLwxY2sbb11CiIkQYiKEmAghJkKIiRBiIoSYCCEmQoh5Y8bWNt66hBATIcRECDERQkyEEBMhxEQIMRFCTIQQ88aMrW28dQkhJkKIiRBiIoSYCCEmQoiJEGIihJgIIeaNGVvbeOsSQkyEEBMhxEQIMRFCTIQQEyHERAgxEULMGzO2tvHWJYSYCCEmQoiJEGIihJgIISZCiIkQYiKEmDdmbG3jrUsIMRFCTIQQEyHERAgxEUJMhBATIcRECDFvzNjaxluXEGIihJgIISZCiIkQYiKEmAghJkKIiRBi3pixtY23LiHERAgxEUJMhBATIcRECDERQkyEEBMhxLwxY2sbb11CiIkQYiKEmAghJkKIiRBiIoSYCCEmQoh5Y8bWNt66hBATIcRECDERQkyEEBMhxEQIMRFCTIQQ88aMrW28dQkhJkKIiRBiIoSYCCEmQoiJEGIihJgIIeaNGVvbeOsSQkyEEBMhxEQIMRFCTIQQEyHERAgxEULMGzO2tvHWJYSYCCEmQoiJEGIihJgIISZCiIkQYiKEmDdmbG3jrUsIMRFCTIQQEyHERAgxEUJMhBATIcRECDFvzNjaxluXEGIihJgIISZCiIkQYiKEmAghJkKIiRBi3pixtY23LiHERAgxEUJMhBATIcRECDERQkyEEBMhxLwxY2sbb11CiIkQYiKEmAghJkKIiRBiIoSYCCEmQoh5Y8bWNt66hBATIcRECDERQkyEEBMhxEQIMRFCTIQQ88aMrW28dQkhJkKIiRBiIoSYCCEmQoiJEGIihJgIIeaNGVvbeOsSQkyEEBMhxEQIMRFCTIQQEyHERAgxEULMGzO2tvHWJYSYCCEmQoiJEGIihJgIISZCiIkQYiKEmDdmbG3jrUsIMRFCTIQQEyHERAgxEUJMhBATIcRECDFvzNjaxluXEGIihJgIISZCiIkQYiKEmAghJkKIiRBi3pixtY23LiHERAgxEUJMhBATIcRECDERQkyEEBMhxLwxY2sbb11CiIkQYiKEmAghJkKIiRBiIoSYCCEmQohd5U9sj4KFWzQAAAAASUVORK5CYII=')
        }
        .previewimg{
            flex: 1;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            padding: 0px;
        }
        .box{
            width: 100%;
        }
    `,
    template: `
        <div class="main-wrap">
            <!-- 图片容器 -->
            <ui-box-container class="previewimg-wrap">
                <ui-box-container class="previewimg" v-bind:style="{backgroundImage:previewimg, backgroundSize:previewimgSize}"></ui-box-container>
                <ui-box-container v-if="cfg[curr].outtype==3" class="previewimg" v-bind:style="{backgroundImage:previewimgAlpha, backgroundSize:previewimgSize}"></ui-box-container>
            </ui-box-container>
            <!-- 参数列表 -->
            <ui-box-container class="containerbox">
                <div class="line">
                    <span class="label">本地路径</span>
                    <ui-input class="fill" :value="cfg[curr].dir" placeholder="路径" readonly></ui-input>
                    <ui-button class="cbtn tiny" @click="selectPath()">...</ui-button>
                </div>
                <div class="line">
                    <span class="label">输出路径</span>
                    <ui-input class="fill" :value="cfg[curr].dest" placeholder="路径" v-on:change="onChangeOutPath($event)"></ui-input>
                    <ui-button class="cbtn tiny" @click="selectSavePath()">...</ui-button>
                </div>
                <div class="line">
                    <span class="label">MaxSize</span>
                    <ui-select class="fill" :value="cfg[curr].maxsize.width" v-on:change="onChangeMaxSizeWidth($event)">
                        <option value="32">32</option>
                        <option value="64">64</option>
                        <option value="128">128</option>
                        <option value="256">256</option>
                        <option value="512">512</option>
                        <option value="1024">1024</option>
                        <option value="2048">2048</option>
                    </ui-select>
                    <ui-select class="fill" :value="cfg[curr].maxsize.height" v-on:change="onChangeMaxSizeHeight($event)">
                        <option value="32">32</option>
                        <option value="64">64</option>
                        <option value="128">128</option>
                        <option value="256">256</option>
                        <option value="512">512</option>
                        <option value="1024">1024</option>
                        <option value="2048">2048</option>
                    </ui-select>
                </div>
                <div class="line">
                    <span class="label">Size约束</span>
                    <ui-select class="fill" :value="cfg[curr].sizeConstraints" v-on:change="onChangeSizeConstraints($event)">
                        <option value="POT">POT - Power of 2,4,8,16,32...</option>
                        <option value="AnySize">AnySize</option>
                        <option value="NPOT">Any Size but power of 2</option>
                    </ui-select>
                </div>
                <div class="line">
                    <span class="label">允许旋转</span>
                    <ui-select class="fill" :value="cfg[curr].allowRoration" v-on:change="onChangeAllowRoration($event)">
                        <option value="1">允许</option>
                        <option value="0">不允许</option>
                    </ui-select>
                </div>
                <div class="line">
                    <span class="label">Extrude</span>
                    <ui-num-input class="fill" precision="0" :value="cfg[curr].extrude" step="1" v-on:change="onChangeExtrude($event)"></ui-num-input>
                </div>
                <div class="line">
                    <span class="label">输出方式</span>
                    <ui-select class="fill" :value="cfg[curr].outtype" v-on:change="onChangeOuttype($event)">
                        <option value="1">直通</option>
                        <option value="2">预乘</option>
                        <option value="3">RGB/Alpha分离</option>
                    </ui-select>
                </div>
            </ui-box-container>
            <!-- 工程列表 -->
            <ui-box-container class="listbox">
                <ui-button class="box tiny" :class="{blue:index==curr}" v-for="(index,item) in cfg" @click="onselect(index)">{{item.name}}</ui-button>
            </ui-box-container>
        </div>
        <div style="text-align:right;">
            <span v-bind:style="{color:isSizeOK()}">输出图片尺寸: {{outwidth}} * {{outheight}}</span>
            <span style="color:pink;">预期内存: {{memory}}</span>
        </div>
        <div style="margin-top: 4px;">
            <ui-button class="cbtn green" @click="save">保存</ui-button>
            <ui-button class="cbtn blue" @click="makeImg(curr)">生成Plist</ui-button>
            <ui-button class="cbtn" @click="add">增加图集</ui-button>
            <ui-button class="cbtn red" @click="del">删除</ui-button>
        </div>
    `,

    // $: {
    //     canvas: '#canvas'
    // },

    ready() {

        const fs = require('fs-extra');
        const path = require('path');
        const os = require('os');
        const exec = require('child_process').exec;
        const sizeOf = require('image-size');
        const cfgFile = path.resolve(Editor.projectInfo.path, './assets-origin/atlas/0config.json');
        // const canvas = this.$canvas;
        let count = 1;

        new window.Vue({
            el: this.shadowRoot,
            data: {
                cfg: [],
                curr: 0,
                previewimg: '',
                previewimgAlpha: '',
                previewimgSize: 'contain',
                outwidth: 0,
                outheight: 0,
                memory: 0,
                out: {
                    previewPng: '',
                    previewPlist: '',
                    exportPng: '',
                    exportPlist: '',
                    done: function(){}
                }
            },
            created() {
                this.init();
            },
            methods: {
                init() {
                    if (fs.existsSync(cfgFile)) {
                        let list = JSON.parse(fs.readFileSync(cfgFile).toString());
                        list.sort((a, b)=>{
                            return a.name.localeCompare(b.name);
                        });
                        for (let i = 0; i < list.length; i++) {
                            if (!list[i].maxsize) {
                                list[i].maxsize = {
                                    width: 1024,
                                    height: 1024
                                };
                            }
                            if (list[i].extrude === undefined) {
                                list[i].extrude = 1;
                            }
                            if (list[i].outtype === undefined) {
                                if (list[i].premultiplyAlpha) {
                                    list[i].outtype = 2;
                                }
                                else {
                                    list[i].outtype = 1;
                                }
                            }
                            if (list[i].sizeConstraints === undefined) {
                                list[i].sizeConstraints = 'AnySize';
                            }
                            if (list[i].premultiplyAlpha !== undefined) {
                                delete list[i].premultiplyAlpha;
                            }
                            if( list[i].allowRoration === undefined ){
                                list[i].allowRoration = 1;
                            }
                        }
                        this.cfg = list;
                        this.onselect(0);
                    }
                },
                isSizeOK() {
                    if (this.outwidth <= this.cfg[this.curr].maxsize.width && this.outheight <= this.cfg[this.curr].maxsize.height) {
                        return '#26e426';
                    }
                    return '#fb4141';
                },
                onselect(index) {
                    this.curr = index;
                    this.makeImg(this.curr, true);
                },
                selectPath() {
                    const { dialog } = require('electron').remote;
                    dialog.showOpenDialog({
                        title: "选择atlas散图所在目录",
                        defaultPath: path.resolve(Editor.projectInfo.path, './assets-origin/atlas'),
                        properties: ['openDirectory']
                    }, (filename) => {
                        if (!filename) {
                            return;
                        }
                        this.cfg[this.curr].dir = filename[0].replace(Editor.projectInfo.path, '.');
                        this.cfg[this.curr].name = path.basename(filename[0]);
                        this.makeImg(this.curr, true);
                    });
                },
                selectSavePath() {
                    const { dialog } = require('electron').remote;
                    dialog.showOpenDialog({
                        title: "选择atlas散图所在目录",
                        defaultPath: path.resolve(Editor.projectInfo.path, this.cfg[this.curr].dest || './assets/'),
                        properties: ['openFile', 'openDirectory'],
                        filters: [
                            { name: 'plist', extensions: ['plist'] },
                        ]
                    }, (filename) => {
                        console.warn(filename);
                        if (!filename) {
                            return;
                        }
                        const stat = fs.statSync(filename[0]);
                        if (!stat.isFile()) {
                            filename[0] = path.resolve(filename[0], `./临时图集${count++}.plist`);
                        }
                        const ext = path.extname(filename[0]);
                        this.cfg[this.curr].dest = filename[0].replace(Editor.projectInfo.path, '.').replace(ext, '');
                    });
                },
                onChangeOutPath(evt) {
                    this.cfg[this.curr].dest = evt.detail.value;
                },
                onChangeMaxSizeWidth(evt) {
                    console.warn('onChangeMaxSizeWidth', evt.detail.value);
                    this.cfg[this.curr].maxsize.width = parseInt(evt.detail.value, 10);
                },
                onChangeMaxSizeHeight(evt) {
                    this.cfg[this.curr].maxsize.height = parseInt(evt.detail.value, 10);
                },
                onChangeExtrude(evt) {
                    this.cfg[this.curr].extrude = parseInt(evt.detail.value, 10);
                    this.makeImg(this.curr, true);
                },
                onChangeSizeConstraints(evt) {
                    this.cfg[this.curr].sizeConstraints = evt.detail.value;
                    this.makeImg(this.curr, true);
                },
                onChangeOuttype(evt) {
                    var val = parseInt(evt.detail.value, 10);
                    this.cfg[this.curr].outtype = val;
                    this.makeImg(this.curr, true);
                },
                onChangeAllowRoration(evt){
                    this.cfg[this.curr].allowRoration = parseInt(evt.detail.value, 10);
                    Editor.warn(this.cfg[this.curr].allowRoration);
                    this.makeImg(this.curr, true);
                },
                getRandomOut(ext, msg=''){
                    return path.resolve(os.tmpdir(), `out_${msg}_${Date.now()}_${Math.random()}.${ext}`)
                },
                makeImg(curr, isPreview = false, alpha = false) {
                    if (isPreview && !alpha) {
                        this.previewimg = '';
                    }
                    let app = false;
                    if (os.platform() == 'darwin') {
                        app = path.resolve(Editor.projectInfo.path, `./tools/${os.platform()}/TexturePacker.app/Contents/MacOS/TexturePacker`);
                    }
                    if (os.platform() == 'win32') {
                        app = path.resolve(Editor.projectInfo.path, `./tools/${os.platform()}/bin/TexturePacker.exe`);
                    }
                    if (!fs.existsSync(app)) {
                        Editor.error('TexturePacker APP不存在');
                        return;
                    }
                    const data = this.cfg[curr];
                    const isAlphaSplited = data.outtype == 3;
                    if (!data.dir) {
                        return;
                    }
                    if( isAlphaSplited ){
                        this.previewimgAlpha = '';
                    }

                    this.out.previewPng = this.getRandomOut('png');
                    this.out.previewPlist = this.getRandomOut('plist');
                    if( isPreview ){
                        this.out.exportPng = this.getRandomOut('png', 'p2');
                        this.out.exportPlist = this.getRandomOut('plist', 'p2');
                    }
                    else{
                        const alphaSplitedExt = isAlphaSplited ? (alpha ? 'Alpha' : '') : '';
                        this.out.exportPng = path.resolve(Editor.projectInfo.path, `${this.cfg[curr].dest}${alphaSplitedExt}.png`);
                        this.out.exportPlist = path.resolve(Editor.projectInfo.path, `${this.cfg[curr].dest}${alphaSplitedExt}.plist`);
                    }
                    // console.warn(JSON.parse(JSON.stringify(this.out)));

                    const maxwidth = data.maxsize.width;
                    const maxheight = data.maxsize.height;
                    const premultiplyAlpha = data.outtype == 2 ? '--premultiply-alpha' : '';
                    const sizeConstraints = data.sizeConstraints;
                    const opt = isAlphaSplited && alpha ? '--opt ALPHA' : '';
                    const trim = isAlphaSplited ? '--trim-mode None' : '';
                    const AutoAlias = isAlphaSplited ? '--disable-auto-alias' : '';
                    const AllowRotation = data.allowRoration ? '--enable-rotation' : '--disable-rotation';
                    const cmd = `${app} --sheet ${this.out.previewPng} --data ${this.out.previewPlist} ${opt} ${trim} ${AutoAlias} ${premultiplyAlpha} --size-constraints ${sizeConstraints} --allow-free-size --smart-update --trim --padding 2 --extrude ${data.extrude} ${AllowRotation} --max-width ${maxwidth} --max-height ${maxheight} --format cocos2d ${path.resolve(Editor.projectInfo.path, this.cfg[curr].dir)}`;
                    exec(cmd, (err, stdout, stderr) => {
                        Editor.log(err, stdout, stderr);
                        if (stderr.indexOf('Not all sprites') > 0) {
                            alert('输出图片太大!有部分图片丢失!\n\n' + stderr);
                            return;
                        }
                        const dimensions = sizeOf(this.out.previewPng);
                        this.outwidth = dimensions.width;
                        this.outheight = dimensions.height;
                        this.duleMemoty(this.outwidth, this.outheight);
                        //回调
                        this.out.done = function(){};
                        //后续处理
                        if (isPreview) {
                            if (isAlphaSplited && !alpha) {
                                this.out.done = ()=>{
                                    this.makeImg(curr, isPreview, true);
                                };
                            }
                            this.dealFinalOut(data.outtype, alpha);
                        }
                        else {
                            this.out.done = ()=>{
                                if( isAlphaSplited && !alpha ){
                                    this.makeImg(curr, isPreview, true);
                                }
                                else{
                                    Editor.assetdb.refresh(this.out.exportPng.replace(Editor.projectInfo.path, 'db:/'));
                                    Editor.assetdb.refresh(this.out.exportPlist.replace(Editor.projectInfo.path, 'db:/'));
                                }
                            };
                            Editor.success('plist生成成功=' + this.cfg[curr].dest);
                            let pliststr = fs.readFileSync(this.out.previewPlist).toString();
                            pliststr = pliststr.replace(/\<string\>\$TexturePacker\:SmartUpdate\:.+\$\<\/string\>/g, '<string>$TexturePacker:SmartUpdate:---$</string>');
                            pliststr = pliststr.replace(/\<string\>out\_.+\.png\<\/string\>/g, `<string>${path.basename(this.out.exportPng)}</string>`);
                            fs.writeFileSync(this.out.previewPlist, pliststr);
                            this.dealFinalOut(data.outtype, alpha);
                        }
                    });

                },
                duleMemoty(w, h){
                    let width = 0;
                    let height = 0;
                    for(let i=1; i<12; i++){
                        const p = Math.pow(2, i);
                        if( !width && p > w ){
                            width = p;
                        }
                        if( !height && p > h ){
                            height = p;
                        }
                    }

                    const memory = width*height*(8+8+8+8)/(8*1024*1024);
                    this.memory = `${width}*${height} = ${memory.toFixed(3)}MB`;
                },
                add() {
                    this.cfg.push({
                        name: "test atlas",
                        dir: "",
                        dest: "",
                        maxsize: {
                            width: 1024,
                            height: 1024
                        },
                        sizeConstraints: 'AnySize',
                        extrude: 1,
                        outtype: 1,
                        allowRoration: 1
                    });
                },
                del() {
                    this.cfg.splice(this.curr, 1);
                    this.onselect(0);
                },
                save() {
                    fs.writeFileSync(cfgFile, JSON.stringify(this.cfg, null, 4).replace(/\\\\/g, '/'));
                    Editor.success('成功');
                },
                dealFinalOut(outtype, alpha){
                    !alpha && fs.copySync(this.out.previewPlist, this.out.exportPlist);
                    if( outtype == 3 && !alpha ){
                        this.drawImageRGB();
                    }
                    else{
                        fs.copySync(this.out.previewPng, this.out.exportPng);
                        if( alpha ){
                            this.previewimgAlpha = `url(file://${this.out.exportPng})`;
                        }
                        else{
                            this.previewimg = `url(file://${this.out.exportPng})`;
                        }
                        this.out.done();
                    }
                },
                //========================== webgl ============================
                getVertexGLSL() {
                    return `
                        attribute vec4 a_Position;
                        attribute vec2 a_TextCoord;
                        attribute vec2 a_TextureSize;
                        varying vec2 v_TexCoord;
                        varying vec2 v_TextureSize;
                        void main(){
                            gl_Position = a_Position;
                            v_TexCoord = a_TextCoord;
                            v_TextureSize = a_TextureSize;
                        }
                    `;
                },
                getFragmentGLSL() {
                    return `
                        precision mediump float;
                        uniform sampler2D u_Sampler;
                        varying vec2 v_TexCoord;
                        varying vec2 v_TextureSize;

                        vec3 getIsStrokeWithAngel(float size, float angel) {  
                            vec3 ret = vec3(0.0, 0.0, 0.0); 
                            float rad = angel * 0.01745329252; 

                            float x = v_TexCoord.x + size * cos(rad) / v_TextureSize.x;
                            float y = v_TexCoord.y + size * sin(rad) / v_TextureSize.y;

                            int cross = 0;

                            if( y < 0.0 ){
                                cross++;
                            }

                            if( y > 1.0 ){
                                cross++;
                            }

                            if( x < 0.0 ){
                                cross++;
                            }

                            if( x > 1.0 ){
                                cross++;
                            }

                            if( cross > 0 ){
                                return ret;
                            }

                            vec4 c = texture2D(u_Sampler, vec2(x, y));
                            if (c.a >= 1.0){  
                                ret = vec3(c);
                            }  
                            return ret;  
                        }  

                        void main() {
                            vec4 color = texture2D(u_Sampler, v_TexCoord);
                            if( color.a > 0.0 ){
                                color.a = 1.0;
                                gl_FragColor = color;
                                return;
                            } 

                            for( float dis = 1.0; dis < 50.0; dis+=1.0 ){
                                for( float angel = 0.0; angel <= 360.0; angel += 30.0 ){
                                    vec3 c = getIsStrokeWithAngel(dis, angel);
                                    int ok = 0;
                                    if( c.r > 0.0 ){
                                        ok++;
                                    }
                                    if( c.g > 0.0 ){
                                        ok++;
                                    }
                                    if( c.b > 0.0 ){
                                        ok++;
                                    }
                                    if( ok > 0 ){
                                        gl_FragColor = vec4(c, 1.0);
                                        return;
                                    }
                                }
                            }

                            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
                        }
                    `;
                },
                drawImageRGB(png) {
                    var image = new Image();
                    image.onload = () => {
                        this._drawImageRGB(image);
                    };
                    image.src = this.out.previewPng;
                },
                _drawImageRGB(png) {
                    if (this.canvasCache) {
                        this.canvasCache.parentNode.removeChild(this.canvasCache);
                    }
                    //获取canvas元素
                    var canvas = this.canvasCache = document.createElement('canvas');
                    canvas.style = `position:absolute;z-index:999999;width:${png.width / 4}px;height:${png.height / 4}px;display:none;`;
                    canvas.setAttribute('width', png.width);
                    canvas.setAttribute('height', png.height);
                    document.body.appendChild(canvas);
                    //获取绘制二维上下文
                    var gl = canvas.getContext('webgl2', {
                        Alpha: true,                    //alpha缓冲
                        depth: true,                    //至少16位的深度缓冲
                        stencil: false,                 //至少8位的模板缓存
                        antialias: true,                //抗锯齿
                        premultipliedAlpha: true,       //包含的颜色与预乘alpha
                        preserveDrawingBuffer: false    //缓冲区将不会被清零，直到被清除或由作者改写将保留它们的值
                    });
                    if (!gl) {
                        alert("Failed");
                        return;
                    }
                    Editor.error('开始WEBGL绘图RGB');
                    //编译着色器
                    var vertShader = gl.createShader(gl.VERTEX_SHADER);
                    gl.shaderSource(vertShader, this.getVertexGLSL());
                    gl.compileShader(vertShader);

                    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
                    gl.shaderSource(fragShader, this.getFragmentGLSL());
                    gl.compileShader(fragShader);

                    //合并程序
                    var shaderProgram = gl.createProgram();
                    gl.attachShader(shaderProgram, vertShader);
                    gl.attachShader(shaderProgram, fragShader);
                    gl.linkProgram(shaderProgram);
                    gl.useProgram(shaderProgram);

                    //传纹理大小
                    var a_TextureSize = gl.getAttribLocation(shaderProgram, "a_TextureSize");
                    gl.vertexAttrib2f(a_TextureSize, parseFloat(png.width), parseFloat(png.height));

                    //获取坐标点
                    var a_Position = gl.getAttribLocation(shaderProgram, 'a_Position');
                    if (a_Position < 0) {
                        Editor.error('Failed to get the storage location of a_Position');
                        return;
                    }
                    var n = this.initBuffers(gl, shaderProgram);
                    if (n < 0) {
                        Editor.error('Failed to set the positions');
                        return;
                    }
                    this.initTexture(gl, shaderProgram, n, png);

                },
                initBuffers(gl, shaderProgram) {
                    //顶点坐标和颜色
                    var vertices = new Float32Array([
                        -1.0, 1.0, 0.0, 1.0,
                        -1.0, -1.0, 0.0, 0.0,
                        1.0, 1.0, 1.0, 1.0,
                        1.0, -1.0, 1.0, 0.0
                    ]);
                    var n = 4;//点的个数
                    //创建缓冲区对象
                    var vertexBuffer = gl.createBuffer();

                    //将缓冲区对象绑定到目标
                    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
                    //向缓冲区写入数据
                    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

                    var FSIZE = vertices.BYTES_PER_ELEMENT;

                    //获取坐标点
                    var a_Position = gl.getAttribLocation(shaderProgram, "a_Position");
                    //将缓冲区对象分配给a_Position变量
                    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
                    //连接a_Position变量与分配给它的缓冲区对象
                    gl.enableVertexAttribArray(a_Position);

                    //获取Color坐标点
                    var a_TextCoord = gl.getAttribLocation(shaderProgram, "a_TextCoord");
                    //将缓冲区对象分配给a_Position变量
                    gl.vertexAttribPointer(a_TextCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
                    //连接a_Position变量与分配给它的缓冲区对象
                    gl.enableVertexAttribArray(a_TextCoord);
                    return n;
                },
                initTexture(gl, shaderProgram, n, png) {
                    //创建纹理对象
                    var texture = gl.createTexture();
                    var u_Sampler = gl.getUniformLocation(shaderProgram, 'u_Sampler');
                    this.loadTexture(gl, n, texture, u_Sampler, png);
                    return true;
                },
                loadTexture(gl, n, texture, u_Sampler, image) {

                    //1.对纹理图像进行Y轴反转
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
                    //2.开启0号纹理单元
                    gl.activeTexture(gl.TEXTURE0);
                    //3.向target绑定纹理对象
                    gl.bindTexture(gl.TEXTURE_2D, texture);

                    //4.配置纹理参数
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    //5.配置纹理图像
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);

                    //6.将0号纹理图像传递给着色器
                    gl.uniform1i(u_Sampler, 0);
                    // 清空 <canvas>
                    gl.clear(gl.COLOR_BUFFER_BIT);

                    //绘制矩形
                    gl.drawArrays(gl.TRIANGLE_STRIP, 0, n);

                    this.writeImageSync(this.canvasCache.toDataURL());
                },
                writeImageSync(data_url) {
                    fs.writeFileSync(this.out.exportPng, data_url.split(";base64,").pop(), { encoding: "base64" });
                    this.previewimg = `url(file://${this.out.exportPng})`;
                    this.out.done();
                }
            }
        });
    },
});
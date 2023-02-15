import navbar from "./navbar";
import sidebar from "./sidebar";
import {FOOTER_HTML_INFO} from "./constant.config";
import {hopeTheme} from "vuepress-theme-hope";
import {fileURLToPath} from "node:url";
// // @ts-ignore
// import {path} from "@vuepress/utils";
// // @ts-ignore
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// @ts-ignore
import { getDirname, path } from "@vuepress/utils";
// @ts-ignore
const __dirname = getDirname(import.meta.url);

/**
 * 主题相关配置
 * 参考主题：https://theme-hope.vuejs.press/zh/config/intro.html#%E9%85%8D%E7%BD%AE%E6%A6%82%E5%BF%B5
 */
export default {
    theme: hopeTheme({
        navbarIcon: false,
        darkmode: "toggle",
        // 支持全屏
        // fullscreen: true,
        // 纯净模式
        // pure: true,
        hostname: 'https://408.142vip.cn',
        author: {
            name: 'Chu·Fan',
            email: 'fairy_408@2925.com',
            url: 'https://www.142vip.cn'
        },
        favicon: "/favicon.ico",
        // logo: "/assets/408_logo.png",
        navbar: navbar,
        // 导航栏布局
        navbarLayout: {
            start: ["Brand"],
            center: ["Links"],
            end: ["Language", "Search", "Repo", "Outlook",]
        },
        sidebar: sidebar,
        // sidebar: "heading",

        pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
        // 主题布局选项
        docsRepo: "https://github.com/142vip/JavaScriptCollection.git",
        repo: "https://github.com/142vip/JavaScriptCollection",
        logoDark: "/assets/408_logo.png",

        // 博客配置
        blog: {
            name: '测试',
            avatar: '',
            description: '',
            intro: '',
            roundAvatar: true,
            timeline: "时间轴的顶部文字",
            // articleInfo: "",
            medias: {
                "BiliBili": "https://space.bilibili.com/350937042?spm_id_from=333.1007.0.0"
            }
        },
        // 设置页脚
        displayFooter: true,
        footer: FOOTER_HTML_INFO,
        copyright: false,

        // 主题色选择器
        themeColor: {
            blue: "#2196f3",
            red: "#f26d6d",
            green: "#3eaf7c",
            orange: "#fb9b5f",
        },

        plugins: {
            copyright: false,
            // 开启博客功能
            blog: true,
            // 代码块
            mdEnhance: {
                codetabs: true,
                tasklist: true, // 支持任务列表
                // todo 引入代码文件时的路径替换 支持@code别名
                include: {
                    resolvePath: (str) =>{
                        console.log(2222,str,str.replace(/^@code/, path.resolve(__dirname, '../../code/')))
                        return str.replace(/^@code/, path.resolve(__dirname, '../../code/'))
                    }
                },
                // 启用 figure
                figure: true,
                // 启用图片懒加载
                imgLazyload: true,
                // 启用图片标记
                imgMark: true,
                // 启用图片大小
                imgSize: true,
                playground: {
                    presets: ["ts", "vue"],
                },
                presentation: {
                    plugins: ["highlight", "math", "search", "notes", "zoom"],
                },
                stylize: [
                    {
                        matcher: "Recommended",
                        replacer: ({ tag }) => {
                            if (tag === "em")
                                return {
                                    tag: "Badge",
                                    attrs: { type: "tip" },
                                    content: "Recommended",
                                };
                        },
                    },
                ],
                sub: true,
                sup: true,
                tabs: true,
                vPre: true,
                vuePlayground: true,
            },
            copyCode: {
                showInMobile: true
            },
            // 参考：https://theme-hope.vuejs.press/zh/guide/markdown/components.html
            components: {
                // 你想使用的组件
                components: [
                    "AudioPlayer",
                    "Badge",
                    "BiliBili",
                    "CodePen",
                    "PDF",
                    "StackBlitz",
                    "VideoPlayer",
                    "YouTube",
                ],
            },
        }
    })
}
module.exports = [
"[project]/src/data/resume-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESUME_DATA",
    ()=>RESUME_DATA,
    "RESUME_DATA_CN",
    ()=>RESUME_DATA_CN,
    "RESUME_DATA_EN",
    ()=>RESUME_DATA_EN,
    "getResumeData",
    ()=>getResumeData
]);
const RESUME_DATA_EN = {
    name: "Yinxin Sun",
    initials: "YN",
    location: "Xian, Shaanxi, China",
    locationLink: "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E9%99%95%E8%A5%BF%E7%9C%81%E8%A5%BF%E5%AE%89%E5%B8%82",
    about: "Linux System & Network Engineer",
    summary: "Linux System & Network Engineer. Experienced in building high-performance network applications, handling data/control path, and solving concurrency issues. Passionate about open source and AI-driven programs.",
    avatarUrl: "/avatar.jpg",
    personalWebsiteUrl: "https://sunforthree.github.io",
    contact: {
        email: "sunforthree@gmail.com",
        tel: "+86 13253593015",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/sunforthree",
                icon: "github"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yinxin-sun-a70044284/",
                icon: "linkedin"
            },
            {
                name: "WeChat",
                url: "sunforthree",
                icon: "wechat"
            }
        ]
    },
    education: [
        {
            school: "Xi'an Jiaotong University",
            degree: "Master - Computer Technology - Advanced NeTworking System Lab",
            start: "2021",
            end: "2024",
            description: "Involved in research on programming network stack and high-performance computing."
        },
        {
            school: "Zhengzhou University",
            degree: "Bachelor - Computer Science and Technology - Hanwei IoT Lab",
            start: "2017",
            end: "2021",
            description: "Researched programmable network stacks and high-performance computing."
        }
    ],
    work: [
        {
            company: "Qualcomm",
            link: "https://www.qualcomm.com/",
            badges: [
                "Linux",
                "Netdev",
                "C/C++/Python",
                "Openwrt",
                "Netfilter",
                "Modem/Auto"
            ],
            title: "Software Engineer",
            start: "2023",
            end: null,
            description: "Building user-space and kernel-space applications and SDK for Linux network and system functionality.",
            highlights: [
                "Involved in SDX ARM chipset modem and automotive projects, optimizing network performance and reliability.",
                "Handled multiple OpenWrt system daemon-level components: procd, netifd, dhcpd... improving system stability and performance.",
                "Implemented high-level WAN/LAN network management features and SDK for modem and automotive use cases, solving multiple WAN, bridge LAN and VLAN concurrency issues.",
                "Implemented and optimized Netfilter modules in user space (nftables) and kernel space, for NAT, port triggering and so on.",
                "Built automated feature test framework for multiple Linux/Windows servers and clients, AI agent-driven.",
                "Implemented agent-level tool for SourceInsight IDE with LangChain and internal SDK."
            ]
        }
    ],
    projectExperience: [
        {
            company: "Graduate Project",
            link: "",
            badges: [
                "C/C++",
                "DPDK",
                "Programming Network",
                "User-space DSL"
            ],
            title: "High-Speed Network Behavior Detection System",
            start: "2021",
            end: "2023",
            description: "Line-rate (20Gbps) network behavior detection system based on user-space DSL and kernel-space DPDK for high performance.",
            highlights: [
                "User-friendly DSL for defining complex network behavior patterns; supports both stateful and stateless detection",
                "High-speed detection using fine-grained traffic semantics",
                "DPDK-based packet processing pipeline, achieving 20Gbps performance with multiple complexity rulesets",
                "Reduced memory usage by 30% compared to traditional methods",
                "Deployed in a real industrial network environment as detection system"
            ]
        }
    ],
    skills: [
        "Linux System Programming",
        "Network Programming",
        "C/C++/Python",
        "OpenWrt",
        "Kernel Bypass",
        "Systems Concurrency",
        "LLM Agents",
        "System Architecture"
    ],
    projects: [
        {
            title: "PParser",
            techStack: [
                "C",
                "PCAP",
                "HTTP"
            ],
            description: "High-performance packet protocol parser",
            link: {
                label: "PParser GitHub",
                href: "https://github.com/sunforthree/PParser"
            }
        }
    ]
};
const RESUME_DATA_CN = {
    name: "孙寅鑫",
    initials: "YN",
    location: "西安, 陕西, 中国",
    locationLink: "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E9%99%95%E8%A5%BF%E7%9C%81%E8%A5%BF%E5%AE%89%E5%B8%82",
    about: "Linux系统与网络工程师",
    summary: "Linux系统与网络工程师。擅长构建高性能网络应用、处理数据/控制面、解决并发问题。热衷于开源和AI驱动程序开发。",
    avatarUrl: "/avatar.jpg",
    personalWebsiteUrl: "https://sunforthree.github.io",
    contact: {
        email: "sunforthree@gmail.com",
        tel: "+86 13253593015",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/sunforthree",
                icon: "github"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/yinxin-sun-a70044284/",
                icon: "linkedin"
            },
            {
                name: "WeChat",
                url: "sunforthree",
                icon: "wechat"
            }
        ]
    },
    education: [
        {
            school: "西安交通大学",
            degree: "硕士 - 计算机技术 - ANTS高性能网络实验室",
            start: "2021",
            end: "2024",
            description: "专注于网络系统与高性能计算研究，参与多个国家级科研项目。"
        },
        {
            school: "郑州大学",
            degree: "本科 - 计算机科学与技术 - 汉威物联网实验室",
            start: "2017",
            end: "2021",
            description: "系统学习计算机基础理论，参与物联网应用开发项目。"
        }
    ],
    work: [
        {
            company: "Qualcomm",
            link: "https://www.qualcomm.com/",
            badges: [
                "Linux",
                "Netdev",
                "C/C++/Python",
                "OpenWrt",
                "Netfilter",
                "Modem/Auto"
            ],
            title: "软件工程师",
            start: "2023",
            end: null,
            description: "为Linux网络和系统功能构建用户空间和内核空间应用程序及SDK。",
            highlights: [
                "参与SDX ARM芯片组调制解调器和汽车项目，优化网络性能和可靠性。",
                "处理多个OpenWrt系统守护进程级组件：procd、netifd、dhcpd...提高系统稳定性和性能。",
                "实现高级WAN/LAN网络管理功能和SDK，用于调制解调器和汽车用例，解决多WAN、桥接LAN和VLAN并发问题。",
                "在用户空间(nftables)和内核空间实现和优化Netfilter模块，用于NAT、端口触发等。",
                "构建自动化功能测试框架，支持多Linux/Windows服务器和客户端，AI agent驱动。",
                "使用LangChain和内部SDK实现SourceInsight IDE的agent级工具。"
            ]
        }
    ],
    projectExperience: [
        {
            company: "毕业设计",
            link: "",
            badges: [
                "C/C++",
                "DPDK",
                "Programming Network",
                "User-space DSL"
            ],
            title: "高速网络性能检测系统",
            start: "2021",
            end: "2023",
            description: "基于用户空间DSL和内核空间DPDK的线速(20Gbps)网络行为检测系统，实现高性能检测。",
            highlights: [
                "用户友好的DSL用于定义复杂网络行为模式；支持有状态和无状态检测",
                "使用细粒度流量语义实现高速检测",
                "基于DPDK的数据包处理管道，在多复杂规则集下实现20Gbps性能",
                "与传统方法相比减少30%内存使用",
                "作为检测系统部署在真实工业网络环境中"
            ]
        }
    ],
    skills: [
        "Linux System Programming",
        "Network Programming",
        "C/C++/Python",
        "OpenWrt",
        "Kernel Bypass",
        "Systems Concurrency",
        "LLM Agents",
        "System Architecture"
    ],
    projects: [
        {
            title: "PParser",
            techStack: [
                "C",
                "PCAP",
                "HTTP"
            ],
            description: "高性能数据包协议解析器",
            link: {
                label: "PParser GitHub",
                href: "https://github.com/sunforthree/PParser"
            }
        }
    ]
};
function getResumeData(language) {
    return language === "cn" ? RESUME_DATA_CN : RESUME_DATA_EN;
}
const RESUME_DATA = RESUME_DATA_EN;
}),
"[project]/src/app/opengraph-image.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alt",
    ()=>alt,
    "contentType",
    ()=>contentType,
    "default",
    ()=>Image,
    "dynamic",
    ()=>dynamic,
    "size",
    ()=>size
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/og.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/resume-data.ts [app-rsc] (ecmascript)");
;
;
;
const dynamic = "force-static";
const alt = "Minimalist Resume";
const size = {
    width: 1200,
    height: 630
};
const contentType = "image/png";
async function Image() {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$og$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImageResponse"](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: '"Inter"'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "3rem",
                        fontWeight: "bold",
                        color: "#333",
                        marginBottom: "1rem"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESUME_DATA_EN"].name
                }, void 0, false, {
                    fileName: "[project]/src/app/opengraph-image.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "1.5rem",
                        color: "#666",
                        maxWidth: "600px",
                        lineHeight: "1.4"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESUME_DATA_EN"].about
                }, void 0, false, {
                    fileName: "[project]/src/app/opengraph-image.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: "flex",
                        marginTop: "2rem",
                        gap: "1rem"
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESUME_DATA_EN"].personalWebsiteUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "1rem",
                            color: "#666"
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$resume$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RESUME_DATA_EN"].personalWebsiteUrl
                    }, void 0, false, {
                        fileName: "[project]/src/app/opengraph-image.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/opengraph-image.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/opengraph-image.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/opengraph-image.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this), {
        ...size
    });
}
}),
"[project]/src/app/opengraph-image--metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/opengraph-image.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)");
;
;
const imageModule = {
    alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["alt"],
    contentType: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["contentType"],
    dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamic"],
    size: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$opengraph$2d$image$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["size"]
};
async function __TURBOPACK__default__export__(props) {
    const { __metadata_id__: _, ...params } = await props.params;
    const imageUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fillMetadataSegment"])("/", params, "opengraph-image");
    function getImageMetadata(imageMetadata, idParam) {
        const data = {
            alt: imageMetadata.alt,
            type: imageMetadata.contentType || 'image/png',
            url: imageUrl + (idParam ? '/' + idParam : '') + "?c8ccea70284710f4"
        };
        const { size } = imageMetadata;
        if (size) {
            data.width = size.width;
            data.height = size.height;
        }
        return data;
    }
    return [
        getImageMetadata(imageModule, '')
    ];
}
}),
"[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageResponse", {
    enumerable: true,
    get: function() {
        return ImageResponse;
    }
});
function importModule() {
    return __turbopack_context__.A("[externals]/next/dist/compiled/@vercel/og/index.node.js [external] (next/dist/compiled/@vercel/og/index.node.js, esm_import, async loader)");
}
class ImageResponse extends Response {
    static #_ = this.displayName = 'ImageResponse';
    constructor(...args){
        const readable = new ReadableStream({
            async start (controller) {
                const OGImageResponse = // as the auto resolving is not working
                (await importModule()).ImageResponse;
                const imageResponse = new OGImageResponse(...args);
                if (!imageResponse.body) {
                    return controller.close();
                }
                const reader = imageResponse.body.getReader();
                while(true){
                    const { done, value } = await reader.read();
                    if (done) {
                        return controller.close();
                    }
                    controller.enqueue(value);
                }
            }
        });
        const options = args[1] || {};
        const headers = new Headers({
            'content-type': 'image/png',
            'cache-control': ("TURBOPACK compile-time truthy", 1) ? 'no-cache, no-store' : "TURBOPACK unreachable"
        });
        if (options.headers) {
            const newHeaders = new Headers(options.headers);
            newHeaders.forEach((value, key)=>headers.set(key, value));
        }
        super(readable, {
            headers,
            status: options.status,
            statusText: options.statusText
        });
    }
} //# sourceMappingURL=image-response.js.map
}),
"[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/og.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@16.1.6_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/og/image-response.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_4aba0601._.js.map
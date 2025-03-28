const base = {
    get() {
        return {
            url : "http://localhost:8080/lishiguancangxitong/",
            name: "lishiguancangxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lishiguancangxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "历史馆藏系统"
        } 
    }
}
export default base

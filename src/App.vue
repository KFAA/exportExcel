<template>
  <div id="app">
    <h2>Ecosystem</h2>
    <button @click="exportEcel">导出</button>
  </div>
</template>

<script>
const borderAll = {
  top: {
    style: "medium"
  },
  bottom: {
    style: "medium"
  },
  left: {
    style: "medium"
  },
  right: {
    style: "medium"
  }
};
export default {
  name: "app",
  data() {
    return {
      workBook: {
        SheetNames: ["sheet1"],
        Sheets: {
          sheet1: {
            "!ref": "A1:P15",
            "!merges": [
              {
                s: {
                  //s start 开始
                  c: 0, //cols 开始列
                  r: 0 //rows 开始行
                },
                e: {
                  //e end  结束
                  c: 15, //cols 结束列
                  r: 0 //rows 结束行
                }
              }
            ],
            A1: {
              v: "湖北省专项行动、问责统计表",
              t: "s",
              s: {
                font: {
                  sz: 14,
                  color: {
                    rgb: "FFFFFFFF"
                  },
                  bold: true
                },
                alignment: {
                  horizontal: "center",
                  vertical: "center"
                },
                fill: {
                  patternType: "solid",
                  fgColor: {
                    rgb: "FFF31240"
                  }
                }
              }
            },
            B2: {
              v: "序号",
              t: "s",
              s: {
                border: borderAll
              }
            },
            A2: {
              v: "",
              s: {
                border: borderAll
              }
            }
          }
        }
      }
    };
  },
  methods: {
    exportEcel() {
      console.log(this.XLSX)
      const workbooKOut = this.XLSX.write(this.workBook, {
        bookType: "xlsx",
        bookSST: false,
        type: "binary"
      });
      // this.saveAs(
      //   new this.Blob([this.s2ab(workbooKOut)], {
      //     type: "application/octet-stream"
      //   }),
      //   "1111.xlsx"
      // );
    },
    saveAs(obj, fileName) {
      const a = document.createElement("a");
      a.download = fileName || "下载";
      a.href = URL.createObjectURL(obj);
      a.click();
      setTimeout(() => {
        URL.revokeObjectURL(obj);
      }, 100);
    },
    s2ab(s) {
      let buf = new ArrayBuffer(s.length);
      let view = new Uint8Array(buf);
      for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
  }
};
</script>

<style lang="scss">
// @import "xlsx-style";
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}
</style>

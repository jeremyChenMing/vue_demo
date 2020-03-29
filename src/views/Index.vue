<!-- 首页 -->
<template>
  <div>
    <div id="echartsBox"></div>
    <div>
      <el-button @click="handleLogin">登录</el-button>
      <el-button @click="handleGet">GET</el-button>
      <el-button @click="handlePost">POST</el-button>
      <el-button @click="handlePut">PUT</el-button>
      <el-button @click="handleDel">DELETE</el-button>
    </div>

    <div style="padding: '20px">
      <el-button @click="handleGetHttp">get-http请求</el-button>
      <el-button @click="handlePostHttp">post-http请求</el-button>
      <el-upload 
        :action="action"
        :headers="headers"
        name='file'
      >
        <el-button>上传</el-button>
      </el-upload>
      <input type="file" @input="change" />
    </div>
  </div>
</template>

<script>
import {
  dataBJ,
  dataGZ,
  dataSH,
  schema,
  itemStyle
} from "../constants/constants";
import { logins, getMessage, addPolicysMessage, updatePolicys, deletePolicys } from "@/services/api";
export default {
  data() {
    return {
      action: '/api/v1/basic/upload-file'
    };
  },
  computed: {
    headers() {
      const token = localStorage.getItem('token')
      return {
        'Authorization': `JWT ${JSON.parse(token)}`
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.$nextTick(() => {
      this.loadEchart();
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    let _this = this;
    window.onresize = function() {
      _this.myChart.resize();
    };
  },
  methods: {
    loadEchart() {
      this.myChart = this.$echarts.init(document.getElementById("echartsBox"));
      const options = {
        backgroundColor: "#404a59",
        color: ["#dd4444", "#fec42c", "#80F1BE"],
        legend: {
          top: 10,
          data: ["北京", "上海", "广州"],
          textStyle: {
            color: "#fff",
            fontSize: 16
          }
        },
        grid: {
          left: "10%",
          right: 150,
          top: "18%",
          bottom: "10%"
        },
        tooltip: {
          padding: 10,
          backgroundColor: "#222",
          borderColor: "#777",
          borderWidth: 1,
          formatter: function(obj) {
            var value = obj.value;
            return (
              '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
              obj.seriesName +
              " " +
              value[0] +
              "日：" +
              value[7] +
              "</div>" +
              schema[1].text +
              "：" +
              value[1] +
              "<br>" +
              schema[2].text +
              "：" +
              value[2] +
              "<br>" +
              schema[3].text +
              "：" +
              value[3] +
              "<br>" +
              schema[4].text +
              "：" +
              value[4] +
              "<br>" +
              schema[5].text +
              "：" +
              value[5] +
              "<br>" +
              schema[6].text +
              "：" +
              value[6] +
              "<br>"
            );
          }
        },
        xAxis: {
          type: "value",
          name: "日期",
          nameGap: 16,
          nameTextStyle: {
            color: "#fff",
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#eee"
            }
          }
        },
        yAxis: {
          type: "value",
          name: "AQI指数",
          nameLocation: "end",
          nameGap: 20,
          nameTextStyle: {
            color: "#fff",
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: "#eee"
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: [
          {
            left: "right",
            top: "10%",
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ["圆形大小：PM2.5"],
            textGap: 30,
            textStyle: {
              color: "#fff"
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ["rgba(255,255,255,.2)"]
            },
            controller: {
              inRange: {
                color: ["#c23531"]
              },
              outOfRange: {
                color: ["#444"]
              }
            }
          },
          {
            left: "right",
            bottom: "5%",
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,

            precision: 0.1,
            text: ["明暗：二氧化硫"],
            textGap: 30,
            textStyle: {
              color: "#fff"
            },
            inRange: {
              colorLightness: [1, 0.5]
            },
            outOfRange: {
              color: ["rgba(255,255,255,.2)"]
            },
            controller: {
              inRange: {
                color: ["#c23531"]
              },
              outOfRange: {
                color: ["#444"]
              }
            }
          }
        ],
        series: [
          {
            name: "北京",
            type: "scatter",
            itemStyle: itemStyle,
            data: dataBJ
          },
          {
            name: "上海",
            type: "scatter",
            itemStyle: itemStyle,
            data: dataSH
          },
          {
            name: "广州",
            type: "scatter",
            itemStyle: itemStyle,
            data: dataGZ
          }
        ]
      };
      this.myChart.setOption(options);
    },
    handleLogin() {
      logins({
        mobile: "18566699969",
        password: "XZ123.,",
        code: "",
        type: "pwd",
        user_type: "2"
      })
        .then(data => {
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data.token))
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleGet() {
      getMessage().then(data => {
        console.log(data);
      });
    },
    handlePost() {
      addPolicysMessage({
        status: '0',
        title: '测试标题',
        content: '<p>哈哈哈测试用的</p>'
      }).then(data => {
        console.log(data)
      })
    },
    handlePut() {
      updatePolicys('e45ce57b4fdf4fffa8d03553cfeb8687',
      {
        title: '123',
        status: '0',
        content: '<p>哈哈哈测试用的</p>'
      }).then(data => {
        console.log(data)
      })
    },
    handleDel(){
      deletePolicys({
        uuids: ['e45ce57b4fdf4fffa8d03553cfeb8687']
      }).then(data => {
        console.log(data)
      })
    },




    //$http请求
    handleGetHttp() {
      this.$Http.getMessage({
        page:1,
        page_size: 5
      }).then(data => {
        console.log(data)
      })
    },
    handlePostHttp() {
      this.$Http.addPolicysMessage({
        status: '0',
        title: '测试标题',
        content: '<p>哈哈哈测试用的</p>'
      }).then(data => {
        console.log(data)
      })
    },
    change(e) {
      console.log(e.target.files[0])
      this.$Http.file({file: e.target.files[0]}, true)
    }
  },
  destroyed() {
    console.log("销毁");
    this.myChart.dispose(); // 消除实例
    //   this.myChart.clear() // 只是清楚了画布
  }
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
#echartsBox {
  width: 100%;
  height: 600px;
}
</style>
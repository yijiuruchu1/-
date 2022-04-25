//立即执行函数  ；表示结尾

// (function(){

// })();
// (function(){

// })();

(function() {
    //1.实例化对象 
    var myChart = echarts.init(document.querySelector('.bar .chart'));
    //2.指定配置项和数据
    var option = {
        //color修改柱子颜色
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            //x轴(刻度标签)的文字颜色 文字大小
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12'
            },
            //x轴坐标样式不显示
            axisLine: {
                show: false
            },
            data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业', '行业'],
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            //y轴(刻度标签)的文字颜色 文字大小
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: '12'
            },
            // 修改y轴样式
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            //y轴的分割线颜色
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '',
            //柱子宽度
            barWidth: '35%',
            //设置柱子圆角
            itemStyle: {
                barBorderRadius: 5
            },
            data: [200, 300, 300, 900, 1500, 1200, 600]
        }]
    };
    //配置项给实例对象
    myChart.setOption(option)
})();
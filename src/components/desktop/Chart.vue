<template>
    <div id="chart"></div>
</template>

<script>
import ApexCharts from "apexcharts";

export default {
    props: {
        graphData: {
            type: Array,
        },
    },
    methods: {
        createChart() {
            let chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
            chart.render();
        },
    },
    computed: {
        chartOptions() {
            return {
                chart: {
                    type: "line",
                    animations: {
                        enabled: true,
                        easing: "easeinout",
                        speed: 1000,
                        animateGradually: {
                            enabled: true,
                            delay: 150,
                        },
                        dynamicAnimation: {
                            enabled: true,
                            speed: 350,
                        },
                    },
                },
                series: [
                    {
                        name: "Просмотры",
                        data: this.graphData.map((item) => item.views),
                    },
                ],
                xaxis: {
                    categories: this.graphData.map((item) =>
                        new Date(item.date).toLocaleString("default", {
                            month: "long",
                            day: "numeric",
                        })
                    ),
                },
            };
        },
    },
    mounted() {
        this.createChart();
    },
};
</script>

<style>
#chart > svg {
    height: 400px;
    width: 400px;
}
</style>

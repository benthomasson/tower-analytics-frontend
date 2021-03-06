/*eslint max-len: ["error", { "ignoreStrings": true }]*/
import * as d3 from 'd3';

const barChartEndpoint = '/api/tower-analytics/chart30/';
const modulesEndpoint = '/api/tower-analytics/modules/';
const templatesEndPoint = '/api/tower-analytics/templates/';
const groupedBarChartEndpoint =
    'https://gist.githubusercontent.com/kialam/5d26af588b3f299a4589fc27d2be7ba3/raw/b21325b78b951968041a31a0e0ee061e4d8f40ff/groupedbarchartdata_large.json';
const donutChart1Endpoint =
    'https://gist.githubusercontent.com/kialam/fd0d1982a7aac0010c01a8f83741ff78/raw/5990e72318725bad39de4f977c58c26714f59379/donut_sample_1.json    ';
const donutChart2Endpoint =
    'https://gist.githubusercontent.com/kialam/78cc391eebe2b2b3dd19a859ca9061d8/raw/e56537b87d55dc83f50dea1b8a80a1f90d9f9ed5/donut_sample_2.json';

class D3Util {
    static async readJSON(endpoint) {
        return await d3.json(endpoint);
    }
    static async readCSV(endpoint) {
        return await d3.csv(endpoint);
    }
    static getBarChartData() {
        return this.readJSON(barChartEndpoint);
    }
    static getLineChartData() {
        return this.readJSON(barChartEndpoint);
    }
    static getGroupedChartData() {
        return this.readJSON(groupedBarChartEndpoint);
    }
    static getPieChart1Data() {
        return this.readJSON(donutChart1Endpoint);
    }
    static getPieChart2Data() {
        return this.readJSON(donutChart2Endpoint);
    }
    static getModulesData() {
        return this.readJSON(modulesEndpoint);
    }
    static getTemplatesData() {
        return this.readJSON(templatesEndPoint);
    }

    static getTotal(data) {
        if (!data) {
            return;
        } else {
            let total = 0;
            data.forEach(datum => {
                total += datum.count;
            });
            return total;
        }
    }
}

export default D3Util;

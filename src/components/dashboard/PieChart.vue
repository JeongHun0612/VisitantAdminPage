<script>
import { Doughnut, mixins } from "vue-chartjs";

export default {
  extends: Doughnut,
  mixins: [mixins.reactiveProp],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
};
</script>
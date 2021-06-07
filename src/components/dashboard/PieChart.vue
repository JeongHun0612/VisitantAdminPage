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
    this.maleGradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.femaleGradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.maleGradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.maleGradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.maleGradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.femaleGradient.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.femaleGradient.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.femaleGradient.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(this.chartData, this.options);
  },
};
</script>
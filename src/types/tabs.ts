import Summary from "@pages/searched/tabs/Summary.vue";
import Identification from "@pages/searched/tabs/Identification.vue";
import Quantification from "@pages/searched/tabs/Quantification.vue";
import Processing from "@pages/statistics/tabs/Processing.vue";
import Normalization from "@pages/statistics/tabs/Normalization.vue";
import DifferentialTest from "@pages/statistics/tabs/DifferentialTest.vue";
import JobPlanning from "../tabs/JobPlanning.vue";
import ParameterFileEditing from "../tabs/ParameterFileEditing.vue";

export type JobTab = typeof JobPlanning | typeof ParameterFileEditing;

export type SearchedTab =
  | typeof Summary
  | typeof Identification
  | typeof Quantification;

export type StatisticsTab =
  | typeof Processing
  | typeof Normalization
  | typeof DifferentialTest;

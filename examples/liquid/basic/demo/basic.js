import { Liquid } from '@antv/g2plot';

const liquidPlot = new Liquid(document.getElementById('container'), {
  title: {
    visible: true,
    text: '水波图',
  },
  statistic: 'normal',
  width: 400,
  height: 400,
  min: 0,
  max: 10000,
  value: 4500,
  showValue: true,
});
liquidPlot.render();

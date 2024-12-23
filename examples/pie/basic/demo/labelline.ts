import { Chart } from '@antv/g2';

const data = [
  { item: '1000-2000', percent: 0.602 },
  { item: '2000-3000', percent: 0.278 },
  { item: '1000以内', percent: 0.12 },
];

const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
});

// 设置图表标题
chart.title('生活费水平分布饼状图');

chart.coordinate('theta', {
  radius: 0.75,
});

chart.data(data);

chart.scale('percent', {
  formatter: (val) => {
    val = val * 100 + '%';
    return val;
  },
});

chart.tooltip({
  showTitle: false,
  showMarkers: false,
});

chart
  .interval()
  .position('percent')
  .color('item')
  .label('percent', {
    layout: [{ type: 'limit-in-plot', cfg: { action: 'ellipsis' } }],
    content: (data) => {
      return `${data.item}: ${(data.percent * 100).toFixed(2)}%`;
    },
  })
  .adjust('stack');

chart.interaction('element-active');

chart.theme({
  styleSheet: {
    brandColor: '#FF6B3B',
    paletteQualitative10: [
      '#FF6B3B', '#626681', '#FFC100', '#9FB40F', '#76523B', '#DAD5B5', '#0E8E89', '#E19348', '#F383A2', '#247FEA',
    ],
    paletteQualitative20: [
      '#FF6B3B', '#626681', '#FFC100', '#9FB40F', '#76523B', '#DAD5B5', '#0E8E89', '#E19348', '#F383A2', '#247FEA',
      '#2BCB95', '#B1ABF4', '#1D42C2', '#1D9ED1', '#D64BC0', '#255634', '#8C8C47', '#8CDAE5', '#8E283B', '#791DC9',
    ],
  },
});

chart.render();

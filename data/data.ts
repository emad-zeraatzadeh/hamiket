export type TreeCore = {
  id?: string;
  label: string;
  children: TreeCore[];
};

export const initialTree: TreeCore[] = [
  {
    id: "node_1",
    label: "1. دارایی های جاری",
    children: [
      {
        id: "node_1_1",
        label: "101 وجوه نقد",
        children: [
          {
            id: "node_1_1_1",
            label: "10101 تن خواه",
            children: [],
          },
          {
            id: "node_1_1_2",
            label: "10102 بانک",
            children: [],
          },
        ],
      },
      {
        id: "node_1_2",
        label: "103 حساب های دریافتنی",
        children: [
          {
            id: "node_1_2_1",
            label: "10301 حساب های دریافتنی حامی کت",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "node_2",
    label: "2. دارایی های غیر جاری",
    children: [],
  },
  {
    id: "node_3",
    label: "3. بدهی های جاری",
    children: [
      {
        id: "node_3_1",
        label: "301 حساب های پرداختنی تجاری",
        children: [
          {
            id: "node_3_1_1",
            label: "30101 کیف پول پرداختنی خریدار",
            children: [],
          },
          {
            id: "node_3_1_2",
            label: "30102 حساب های پرداختنی فروشگاه",
            children: [],
          },
          {
            id: "node_3_1_3",
            label: "30103 حساب های پرداختنی فروشنده",
            children: [],
          },
          {
            id: "node_3_1_4",
            label: "30104 حساب های پرداختنی پیک",
            children: [],
          },
        ],
      },
      {
        id: "node_3_2",
        label: "302 حساب های پرداختنی غیرتجاری",
        children: [
          {
            id: "node_3_2_1",
            label: "30201 مالیات پرداختنی",
            children: [],
          },
          {
            id: "node_3_2_2",
            label: "30202 بیمه پرداختنی",
            children: [],
          },
          {
            id: "node_3_2_3",
            label: "30203 ارزش افزوده پرداختنی",
            children: [],
          },
          {
            id: "node_3_2_4",
            label: "تامین کننده هزینه",
            children: [],
          },
          {
            id: "node_3_2_5",
            label: "حقوق پرداختنی",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "node_4",
    label: "4. بدهی های غیر جاری",
    children: [],
  },
  {
    id: "node_5",
    label: "5. حقوق صاحبان سهام (سرمایه)",
    children: [],
  },
  {
    id: "node_6",
    label: "6. درآمد",
    children: [
      {
        id: "node_6_1",
        label: "601 درآمدهای عملیاتی",
        children: [
          {
            id: "node_6_1_1",
            label: "60101 درآمد سفر (رفت به فروشگاه)",
            children: [],
          },
          {
            id: "node_6_1_2",
            label: "60102 درآمد سفر (رفت به فروشگاه)",
            children: [],
          },
          {
            id: "node_6_1_3",
            label: "60103 درآمد سفر (برگشت به فروشگاه)",
            children: [],
          },
          {
            id: "node_6_1_4",
            label: "60104 درآمد سفر (رفت به انبار)",
            children: [],
          },
          {
            id: "node_6_1_5",
            label: "60105 درآمد سفر (رفت از انبار به فروشگاه)",
            children: [],
          },
          {
            id: "node_6_1_6",
            label: "60106 درآمد سفر (رفت از انبار به خریدار)",
            children: [],
          },
        ],
      },
      {
        id: "node_6_2",
        label: "602 درآمدهای غیرعملیاتی",
        children: [
          {
            id: "node_6_2_1",
            label: "60106 درآمد سفر (رفت از انبار به خریدار)",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "node_7",
    label: "7. قیمت تمام شده",
    children: [],
  },
  {
    id: "node_8",
    label: "8. هزینه ها",
    children: [],
  },
  {
    id: "node_9",
    label: "9. حساب های انتظامی",
    children: [
      {
        id: "node_9_1",
        label: "801 حساب های انتظامی سفیر",
        children: [
          {
            id: "node_9_1_1",
            label: "80101 سفر تحویل از فروشگاه",
            children: [],
          },
          {
            id: "node_9_1_2",
            label: "80102 سفر تحویل از خریدار",
            children: [],
          },
          {
            id: "node_9_1_3",
            label: "80103 سفر تحویل از انبار",
            children: [],
          },
        ],
      },
      {
        id: "node_9_2",
        label: "802 حساب های انتظامی فروشگاه",
        children: [
          {
            id: "node_9_2_1",
            label: "80201 تحویل به سفیر",
            children: [],
          },
          {
            id: "node_9_2_2",
            label: "80202 تحویل از خریدار",
            children: [],
          },
        ],
      },
      {
        id: "node_9_3",
        label: "803 حساب های انتظامی انبار",
        children: [
          {
            id: "node_9_3_1",
            label: "80301 تحویل از",
            children: [],
          },
        ],
      },
    ],
  },
];
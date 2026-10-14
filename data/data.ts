import { TreeCore } from "@/types/types";

export const initialTree: TreeCore[] = [
  {
    id: "root",
    label: "حساب های اصلی",
    children: [
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
    ],
  },
];

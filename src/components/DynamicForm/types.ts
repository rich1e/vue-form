/*
 * @Author: gongyuqi@max-optics.com
 * @Date: 2022-11-10 14:52:56
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-15 19:13:46
 * @FilePath: /vue-form/src/components/DynamicForm/types.ts
 * @Description:
 *
 */

/**
 * @see https://www.freecodecamp.org/chinese/news/advanced-typescript-types-cheatsheet/
 */

/**
 * 控件类型
 * @property Input 输入框
 * @property Switch 开关
 * @property Select 选择框
 */
export type ControlType = 'Input' | 'Switch' | 'Select';

/**
 * @description 表单UI类型
 * @property uniseriate 单列
 * @property biserial 双列
 * @property group 分组
 * @property tab 选项卡
 */
export type SceneType = 'uniseriate' | 'biserial' | 'group' | 'tab';

/** 表单tabs数据 */
export type TabsType = Partial<
  Omit<Record<SceneType, FieldType[]>, 'tab' | 'group'> &
    Pick<Record<SceneType, FieldType[][]>, 'group'>
>;

/** 控件功能参数，任意 key-value 对象 */
export type ControlPropsType = {
  [key: string]: string;
} & {
  /** 控件监听字段，同 prop */
  modelValue: string;
};

/**
 * @type {object}
 * @desc 表单字段对象
 * @property {ControlType} control 控件类型
 */
export type FieldType = {
  /** 控件类型 */
  control: ControlType;
  /** 控件显示名称 */
  label?: string;
  /** 控件绑定字段，合法性验证 */
  prop: string;
  /** 控件功能参数，与 Element Plus 保持一致 */
  props: ControlPropsType;
  /** 控件选项列表 */
  options?: any[];
  /** 控件回显字段 */
  bind: string;
  /** 控件默认值 */
  default?: string;
  /** 控件启用状态 */
  disabled?: boolean;
};

/**
 * 表单事件类型
 */
export type ActionsEventType = 'onSubmit' | 'onBack' | 'onCancel' | 'onRest';

/**
 * 表单事件按钮
 */
export type ActionsDetail = {
  /** 按钮文字 */
  btnText: string;
  /** 按钮事件处理函数 */
  handler: (el: any) => void;
};

/**
 * Cannot invoke an object which is possibly 'undefined'.ts(2722)
 * @see https://stackoverflow.com/questions/56913963/cannot-invoke-an-object-which-is-possibly-undefined-ts2722
 */

/**
 * 表单操作类型
 */
export type ActionsType = Partial<Record<ActionsEventType, ActionsDetail>>;

/**
 * @type {object}
 * @desc 表单配置
 */
export type ConfigType = {
  /** UI类型 */
  scene: SceneType;
  /** tabs数据 */
  tabs?: TabsType;
  /** groups数据 */
  groups?: FieldType[][];
  /** Biserial和Uniseriate数据 */
  field?: FieldType[];
  /** 表单验证规则 */
  rule?: any;
  /** 表单操作 */
  actions?: ActionsType;
  /** 表单插槽 */
  slots?: any;
};

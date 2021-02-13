// ストーリーブックでは、UIコンポーネントをキャプチャしているページを「ストーリー」と呼ぶ
import MyButton from '../_src/js/components/Button.vue';

/**
 * default exportするオブジェクトには、ストーリーに対するメタ情報を定義していく
 */
export default {
  title: 'Components/Button',
  component: MyButton,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  component: { MyButton },
  template: '<my-button :href="link" :target="target" class="button">テキスト</my-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};

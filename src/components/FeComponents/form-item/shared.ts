import { ComponentPublicInstance, PropType, Ref } from 'vue';

// interface Props {
//   deepRef: PropType<(ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void | Ref>
// }

// export const formItemProps = defineProps<Props>();
export const formItemProps =
{
  deepRef: {
    type: [Function, Object] as PropType<(ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void | Ref>
  }
};

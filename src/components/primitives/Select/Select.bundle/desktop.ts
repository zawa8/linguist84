export * from 'react-elegant-ui/esm/components/Select/Select.bundle/desktop';

// _listboxSize
import { withModSelectListboxSizeMax } from 'react-elegant-ui/esm/components/Select/_listboxSize/Select_listboxSize_max';
// _width
import { withModSelectWidthMax } from 'react-elegant-ui/esm/components/Select/_width/Select_width_max';
// polyfill
import { ScrollbarOverlapContentFixIsomorphic } from 'react-elegant-ui/esm/components/Select/Select.hocs/ScrollbarOverlapContentFix';
import { Select as SelectDesktop } from 'react-elegant-ui/esm/components/Select/Select@desktop';
// Opened state manager
import { withOpenedStateManager } from 'react-elegant-ui/esm/hocs/state/withOpenedStateManager';
import { compose, composeU, ExtractProps } from 'react-elegant-ui/esm/lib/compose';
import { withRegistry } from 'react-elegant-ui/esm/lib/di';

// Registry
import { SelectDesktopRegistry } from '../Select.registry/desktop';

export * from 'react-elegant-ui/esm/components/Select/Select@desktop';

export const Select = compose(
	withOpenedStateManager,
	composeU(withModSelectWidthMax),
	composeU(withModSelectListboxSizeMax),
	ScrollbarOverlapContentFixIsomorphic,
	withRegistry(SelectDesktopRegistry),
)(SelectDesktop);

Select.defaultProps = { listboxSize: 'max' };

export type ISelectProps = ExtractProps<typeof Select>;

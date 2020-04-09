import Taro from '@tarojs/taro'
import { AtListItem } from 'taro-ui'
import { Omit } from '../../../utils/tpUtils'
import classNames from 'classnames'
import { AtListItemProps } from 'taro-ui/types/list'
import {AtIconProps} from 'taro-ui/types/icon'
import React, { Component } from "react";

export type ListItemPropTypes = Omit<
  AtListItemProps,
  'isSwitch' | 'switchIsCheck' | 'onSwitchChange' | 'arrow'
> & {
  arrow?: 'up' | 'down' | 'right' | ''
  error?: boolean
  longTitle?: boolean
  longExtra?: boolean
  customStyles?: any
  titleColor?: string
  keepOriginExtraColor?: boolean // 是否保留跟 ListItem 一样的 extra 文字颜色
}
export default class ListItem extends Component<
  ListItemPropTypes
> {
  static options = {
    addGlobalClass: true,
  }

  static defaultProps = {
    note: '',
    hasBorder: true,
    disabled: false,
    title: '',
    thumb: '',
    arrow: 'right',
    className: '',
    extraText: '',
    customStyle: {},
    extraTextStyle: {},
    error: false,
    useRenderExtra: false,
    useRenderExtraText: false,
    longTitle: false,
    longExtra: false,
    keepOriginExtraColor: false,
  }

  render() {
    const {
      note,
      onClick,
      hasBorder,
      disabled,
      title,
      thumb,
      arrow,
      iconInfo,
      className,
      customStyle,
      useRenderTitle,
      useRenderArrow,
      error,
      extraText,
      extraTextStyle,
      useRenderExtra,
      useRenderExtraText,
      longTitle,
      longExtra,
      customStyles,
      extraThumb,
      keepOriginExtraColor,
      useRenderNote,
      titleColor,
      useRenderIcon,
    } = this.props

    const _errorStyle = { color: '#FF4949' }
    let _customStyle = customStyle || {},
      _extraTextStyle = extraTextStyle || {},
      _iconInfo = iconInfo,
      _arrow = disabled ? '' : arrow

    if (_iconInfo) {
      _iconInfo = { ...(_iconInfo as any), ...{ customStyle: { display: 'block' } } }
    }

    _extraTextStyle = {
      ..._extraTextStyle,
      ...{ paddingRight: Taro.pxTransform(40) },
    }

    if (error) {
      _customStyle = { ...(_customStyle as {}), ..._errorStyle }
      _extraTextStyle = { ..._extraTextStyle, ..._errorStyle }
    }

    if (!_arrow) {
      _extraTextStyle = { ..._extraTextStyle, ...{ paddingRight: 0 } }
    }

    const cls = classNames(
      'at-icon_reset--block',
      { className },
      {
        'at-list-item_reset-title': longTitle,
        'at-list-item_reset-extra': longExtra,
        'at-list-item_origin-extra-color': keepOriginExtraColor,
      }
    )

    return (
      <AtListItem
        useRenderArrow={useRenderArrow}
        renderArrow={this.props.renderArrow}
        useRenderTitle={useRenderTitle}
        renderTitle={this.props.renderTitle}
        iconInfo={_iconInfo as AtIconProps}
        thumb={thumb}
        className={cls}
        title={title}
        titleColor={titleColor}
        note={note}
        arrow={_arrow}
        hasBorder={hasBorder}
        onClick={(e) => onClick && !disabled && onClick(e)}
        customStyle={_customStyle}
        customStyles={customStyles}
        extraText={extraText}
        useRenderExtra={useRenderExtra}
        renderExtra={this.props.renderExtra}
        useRenderExtraText={useRenderExtraText}
        renderExtraText={this.props.renderExtraText}
        extraTextStyle={_extraTextStyle}
        extraThumb={extraThumb}
        useRenderNote={useRenderNote}
        renderNote={this.props.renderNote}
        useRenderIcon={useRenderIcon}
        renderIcon={this.props.renderIcon}
      />
    )
  }
}
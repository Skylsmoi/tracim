import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Timeline from '../../src/component/Timeline/Timeline.jsx'
import sinon from 'sinon'
import { ROLE } from '../../src/helper.js'

describe('<Timeline />', () => {
  const onClickWysiwygBtnCallBack = sinon.spy()
  const onClickRevisionBtnCallBack = sinon.spy()
  const onClickRestoreArchivedCallBack = sinon.spy()
  const onClickRestoreDeletedCallBack = sinon.spy()
  const onClickValidateNewCommentBtnCallBack = sinon.spy()
  const onChangeNewCommentCallBack = sinon.spy()

  const props = {
    timelineData: [],
    newComment: 'randomNewComment',
    onChangeNewComment: onChangeNewCommentCallBack,
    onClickValidateNewCommentBtn: onClickValidateNewCommentBtnCallBack,
    disableComment: false,
    customClass: 'randomCustomClass',
    customColor: 'red',
    loggedUser: {
      id: 'randomIdLogin',
      name: 'randomNameLogin',
      userRoleIdInWorkspace: ROLE.contentManager.id
    },
    wysiwyg: false,
    onClickWysiwygBtn: onClickWysiwygBtnCallBack,
    onClickRevisionBtn: onClickRevisionBtnCallBack,
    allowClickOnRevision: true,
    shouldScrollToBottom: true,
    showHeader: true,
    rightPartOpen: false, // irrelevant if showHeader is false
    isArchived: false,
    onClickRestoreArchived: onClickRestoreArchivedCallBack,
    isDeleted: false,
    onClickRestoreDeleted: onClickRestoreDeletedCallBack
  }

  window.HTMLElement.prototype.scrollIntoView = () => {}
  const wrapper = mount(
    <Timeline
      {...props}
    />
  )

  describe('Static design', () => {
    it(`The textarea should have the value:"${props.newComment}"`, () => {
      expect(wrapper.find('#wysiwygTimelineComment').prop('value')).to.equal(props.newComment)
    })
    it('The advanced mode button should be disabled when disableComment is true', () => {
      expect(wrapper.find('.timeline__texteditor__advancedtext__btn').prop('disabled')).to.equal(false)
      wrapper.setProps({ disableComment: true })
      expect(wrapper.find('.timeline__texteditor__advancedtext__btn').prop('disabled')).to.equal(true)
      wrapper.setProps({ disableComment: false })
    })
  })

  describe('Handlers', () => {
    it(`onClickWysiwygBtnCallBack should be called when the advancedText button is clicked`, () => {
      wrapper.find(`.${props.customClass}__texteditor__advancedtext__btn`).simulate('click')
      expect(onClickWysiwygBtnCallBack.called).to.equal(true)
    })

    it(`onClickValidateNewCommentBtnCallBack should be called when the submit button is clicked`, () => {
      wrapper.find(`.${props.customClass}__texteditor__submit__btn`).simulate('click')
      expect(onClickValidateNewCommentBtnCallBack.called).to.equal(true)
    })

    it(`onChangeNewCommentCallBack should be called when comment is changing`, () => {
      wrapper.find(`#wysiwygTimelineComment`).simulate('change')
      expect(onChangeNewCommentCallBack.called).to.equal(true)
    })
  })
})

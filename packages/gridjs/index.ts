import Grid from './src/grid';

// FIXME: this is not the best way to bundle and compile themes
import './src/theme/mermaid';
import { html } from './src/util/html';
import { h, createElement, Component, createRef } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import { UserConfig, Config } from './src/config';
import { BaseComponent, BaseProps } from './src/view/base';
import {
  PluginPosition,
  PluginBaseComponent,
  PluginBaseProps,
} from './src/plugin';
import { BaseActions } from './src/view/base/actions';
import { ID } from './src/util/id';
import { className } from './src/util/className';
import Row from './src/row';
import Cell from './src/cell';
import BaseStore from './src/view/base/store';
import Dispatcher from './src/util/dispatcher';
import { Search } from './src/view/plugin/search/search';

export {
  Grid,
  ID,
  Dispatcher,
  Row,
  Cell,
  BaseActions,
  BaseStore,
  className,
  html,
  UserConfig,
  Config,
  BaseComponent,
  BaseProps,
  PluginPosition,
  PluginBaseComponent,
  PluginBaseProps,
  Search,
  h,
  createElement,
  Component,
  createRef,
  useEffect,
  useRef
};

/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { FlowNodeEntity, FreeLayoutPluginContext } from '@flowgram.ai/free-layout-editor';

export function scrollToView(
  ctx: FreeLayoutPluginContext,
  node: FlowNodeEntity,
  sidebarWidth = 448
) {
  const bounds = node.transform.bounds;
  ctx.playground.scrollToView({
    bounds,
    scrollDelta: {
      x: sidebarWidth / 2,
      y: 0,
    },
    zoom: 1,
    scrollToCenter: true,
  });
}

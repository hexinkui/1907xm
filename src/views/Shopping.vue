<template>
    <div class="shopping">
        <div class="store">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAAFWCAYAAABkeVj1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTAzNDgxRThBNDBFMTFFN0IzMTJDQjcxMTdERUFDMTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTAzNDgxRTlBNDBFMTFFN0IzMTJDQjcxMTdERUFDMTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMDM0ODFFNkE0MEUxMUU3QjMxMkNCNzExN0RFQUMxNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMDM0ODFFN0E0MEUxMUU3QjMxMkNCNzExN0RFQUMxNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr5RVboAABDTSURBVHja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" />
            <h3>购物车暂无商品</h3>
            <p>添加到购物车的商品将会显示在这里</p>
            <button>登录</button>
            <button class="now">现在选购</button>
        </div>
    </div>
</template>
<style>
    body{
        background: #ededed;
    }

    .store{
        margin-top: 60%;
    }

    .store img{
        width: 1.76rem;
        height: 2.28rem;
    }

    h3{
        color: rgba(0,0,0,.15);
        margin: 0.5rem 0 0.18rem;
        font-size: 0.5rem;
    }

    p{
        font-size: 0.25rem;
        color: rgba(0,0,0,.15);
    }

    button{
        width: 2.84rem;
        height: 0.8rem;
        margin: 0.32rem 0.02rem 0;
        box-shadow: inset 0 -1px 1px rgba(0,0,0,.2), 0 0 1px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.2);
        background: linear-gradient(#6f94e8,#5178df);
        border-radius: 0.12rem;
        text-shadow: 0 -1px 0 rgba(0,0,0,.15);
        color: #fff;
        border: none;
    }

    .now{
        background: #f0f0f0;
        color: gray;
    }
</style>


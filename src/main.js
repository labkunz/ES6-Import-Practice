import obj from './utils.js';
import func from './add_eventListenr.js';

let input = 30;
console.log(`輸入數字：${input}`);
console.log(`經過utils.js得到的結果：${obj.cal(input)}`);
console.log(`obj名稱：${obj.name}`);

let element_target_1 = "show_func";
let element_target_2 = "get_result";
let alert_context_1 = "計算公式：(n * 3 + 15) / 10 - 3";
let alert_context_2 = `帶入數字：${input} 得到結果：${obj.cal(input)}`;

func.func(element_target_1, alert_context_1);
func.func(element_target_2, alert_context_2);
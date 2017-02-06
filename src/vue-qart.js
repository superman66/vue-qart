/**
 * Created by superman on 17/2/6.
 */

import QArt from 'qartjs';

export default {
    inserted: function(el, binding){
        console.log(binding.value);
        const config = binding.value;

        new QArt({
            value: config.value,
            imagePath: config.imagePath,
            filter: config.filter
        }).make(el);
    }
};
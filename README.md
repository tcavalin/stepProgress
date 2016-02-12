# stepProgress
A simple Step Progress Bar using HTML and CSS3.

## Basic usage ##

The "stepProgress" can be created using the following syntax:

    <div class="steps">
        <ul class="steps-container">
            <li style="width:100%;" class="activated">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 1</div>
                    <div class="step-description">Contexto</div>
                </div>
            </li>
        </ul>
        <div class="step-bar" style="width: 100%;"></div>
    </div>

You can spice up adding other `<li>` tags and adjusting the size of each. Add the class `class="activated"` to mark each completed step.

    <div class="steps">
        <ul class="steps-container">
            <li style="width:33%;" class="activated">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 1</div>
                    <div class="step-description">Contexto</div>
                </div>
            </li>
            <li style="width:33%;">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 2</div>
                    <div class="step-description">Selecionar</div>
                </div>
            </li>
            <li style="width:33%;">
                <div class="step">
                    <div class="step-image"><span></span></div>
                    <div class="step-current">Etapa 3</div>
                    <div class="step-description">Finalizar</div>
                </div>
            </li>
        </ul>
        <div class="step-bar" style="width: 33%;"></div>
    </div>

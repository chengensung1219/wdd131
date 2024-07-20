export function activityTemplate(count) {
    return `
        <section class="activity${count}">
            <p>Activity ${count}</p>
            <div class="item">
                <label for="name${count}">Activity<span>*</span></label>
                <input class="name${count}" type="text" name="name${count}" placeholder="Activity Name"/>
            </div>

            <div class="item">
                <label for="address${count}">Address<span>*</span></label>
                <input id="address${count}" type="text" name="address${count}" placeholder="Address"/>
            </div>

            <div class="item">
                <label for="city${count}">City<span>*</span></label>
                <input id="city${count}" type="text" name="city${count}" placeholder="City"/>
            </div>
            <div class="item">
                <label for="state${count}">State<span>*</span></label>
                <input id="state${count}" type="text" name="state${count}" placeholder="State"/>
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}"/>
            </div>
            <div class="item">
                <label for="message${count}">Message<span>*</span></label>
                <input id="message${count}" type="text" name="message${count}" placeholder="Another Request/Information"/>
            </div>
            <button type="button" id="add" style="height: 40px; margin-top: 30px">Add Activity</button>
        </section>
    `;
}

export function successTemplate(info) {
    return `
        <h2>Thank you ${info.name} for registering.</h2>
        <p>You have registered ${info.count} activities.</p>
    `;
}

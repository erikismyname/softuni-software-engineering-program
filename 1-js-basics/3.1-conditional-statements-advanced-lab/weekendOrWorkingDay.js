function solve([day]) {

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {

        return 'Working day';

    } else if (day == 'Saturday' || day == 'Sunday') {

        return 'Weekend';

    } else {

        return 'Error';

    }

}
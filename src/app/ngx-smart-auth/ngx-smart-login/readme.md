# SAN-SMART-LOGIN

# Description

This is a Login component that allow configuration of literals and
the call function of authentication.

# Input variables

@Input() recoveryLabel: string = This var contains the string of the Recovery label that go to the recovery of password view.
@Input() userLabel: string = This var contains the string of the User input label
@Input() passwordLabel: string = This var contains the string of the Password input label
@Input() buttonLabel: string = This var contains the string of the Button label
@Input() userPlaceholder: string = This var contains the string of the User placeholder
@Input() passwordPlaceholder: string = This var contains the string of the Password placeholder
@Input() homeRoute: string = This var contains the string of the Home route
@Input() apiUrl: string = This var contains the string of the Password input label
@Input() minlengthUser: number = This var contains the string of the minimum length of the User input
@Input() maxlengthUser: number = This var contains the string of the maximum length of the User input
@Input() maxlengthPassword: number = This var contains the string of the maximum length of the Password input
@Input() minlengthPassword: number = This var contains the string of the maximum length of the Password input

# Ouput

@Output() manageData = new EventEmitter() = This emit the data of the User and Password to the parent Component

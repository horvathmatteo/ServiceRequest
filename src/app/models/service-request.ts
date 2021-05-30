export interface ServiceRequest {
    resourceType?: string,
    id?: string,
    text?: SampleText,
    identifier?: Identifier[],
    instantiatesCanonical?: string,
    instantiatesUri?: string,
    basedOn?: Reference[],
    replaces?: Reference[],
    requisition?: Identifier,
    status: "draft" | "active" | "on-hold" | "revoked" | "completed" | "entered-in-error" | "unknown",
    intent: "proposal" | "plan" | "directive" | "order" | "original-order" | "reflex-order" | "filler-order" | "instance-order" | "option",
    category?: CodeableConcept[],
    priority?: "routine" | "urgent" | "asap" | "stat",
    doNotPerform?: boolean,
    code?: CodeableConcept,
    orderDetail?: CodeableConcept[],
    // quantity?: Quantity | Ratio | Range,
    quantityQuantity?: Quantity,
    quantityRatio?: Ratio,
    quantityRange?: Range,
    subject: Reference,
    encounter?: Reference,
    // occurence?: string | Period | Timing,
    occurrenceDateTime?: string,
    occurrencePeriod?: Period,
    occurrenceTiming?: Timing,
    // asNeeded?: boolean | CodeableConcept,
    asNeededBoolean?: boolean,
    asNeededCodeableConcept?: CodeableConcept,
    authoredOn?: string,
    requester?: Reference,
    performerType?: CodeableConcept,
    performer?: Reference[],
    locationCode?: CodeableConcept[],
    locationReference?: Reference[],
    reasonCode?: CodeableConcept[],
    reasonReference?: Reference[],
    insurance?: Reference[],
    supportingInfo?: Reference[],
    specimen?: Reference[],
    bodySite?: CodeableConcept[],
    note?: Annotation[],
    patientInstruction?: string,
    relevantHistory?: Reference[]
}

export interface Identifier {
    use?: "usual" | "official" | "temp" |  "secondary" | "old",
    type?: CodeableConcept,
    system?: string,
    value?: string,
    period?: Period,
    assigner?: Reference
}

export interface CodeableConcept {
    coding?: Coding[],
    text?: string
}

export interface Coding {
    system?: string,
    version?: string,
    code?: string,
    display?: string,
    userSelected?: boolean
}

export interface Period {
    start?: string,
    end?: string
}

export interface Annotation {
    author?: Reference | string,
    time?: string,
    text: string,
}

export interface Reference {
    reference?: string,
    type?: string,
    identifier?: Identifier,
    display?: string
}

export interface Quantity {
    value?: number,
    comparator?: string,
    unit?: string,
    system?: string,
    code?: string
}

export interface Ratio {
    numerator?: Quantity,
    denominator?: Quantity
}

export interface Range {
    low?: SimpleQuantity,
    high?: SimpleQuantity
}

export interface SimpleQuantity {
    value?: number,
    currency?: string
}

export interface Timing {
    event?: string[],
    repeat?: Repeat,
    code?: CodeableConcept
}

export interface SampleText {
    status?: string,
    div?: string
}

export interface Repeat {
    bounds?: Range | Period | string,
    count?: number,
    countMax?: number,
    duration?: number,
    durationMax?: number,
    durationUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a",
    frequency?: number,
    frequencyMax?: number,
    period?: number,
    periodMax?: number,
    periodUnit?: "s" | "min" | "h" | "d" | "wk" | "mo" | "a",
    dayOfWeek?: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun",
    timeOfDay?: string[],
    when?: string[],
    offset?: number
}
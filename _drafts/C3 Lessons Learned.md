



## Data Science Organization Cultural Expectations

There's a difference between an organization whose cultural expectations are:
- Take these data, write the logic, produce the analysis
- Design and maintain a reliable computational system whose inputs, transformations, invariants, tests, and outputs are explicitly specified

The second requires things like:
- schemas
- contracts
- validation
- lineage
- versioning
- reproducibility
- tests
- monitoring
- runbooks
- failure modes
- deployment procedures
- change management


If the client changes the upstream dataset, for example, a consulting culture can produce:

- "We fixed the pipeline."

A product-engineering culture asks:

- "What contract was violated? Why wasn't it detected before production? Which version of the contract changed? Which automated test should have caught it? Who owns the contract? How do we prevent recurrence?"

## Data Science vs Production Environment

An example standard operating procedure for a production pipeline failure:

- Check ingestion validation dashboard.
- Identify contract version.
- Compare current provider schema against expected schema.
- Determine whether provider or canonicalization changed.
- Quarantine affected records.
- Notify data owner.
- Roll back if required.
- Update contract/test if change is intentional.
- Reprocess affected partition.
- Record incident.

## Data Contracts

An example data dictionary
```
Field: customer_age

Source:
    Provider X

Raw type:
    string

Canonical type:
    integer

Nullable:
    No

Valid range:
    0–120

Transformation:
    int(raw.customer_age)

Invalid behavior:
    quarantine record

Business meaning:
    Age of customer at transaction date

Owner:
    Provider X / Data Platform

Last contract revision:
    v3.2
```

An example Contract specification
```
customer_age:
  source_type: string
  canonical_type: integer
  nullable: false
  constraints:
    min: 0
    max: 120
  coercion: integer
  invalid_action: quarantine
```




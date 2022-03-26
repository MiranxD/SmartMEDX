import pytest


@pytest.fixture(autouse=True)
def setup(fn_isolation):
    """
    Isolation setup fixture.
    This ensures that each test runs against the same base environment.
    """
    pass

@pytest.fixture(scope="module")
def transactions(accounts, Transactions):
    """
    Yield a `Contract` object for the Transactions contract.
    """
    yield accounts[0].deploy(Transactions)


@pytest.fixture(scope="module")
def healthrecords(accounts, HealthRecords):
    """
    Yield a `Contract` object for the HealthRecords contract.
    """
    yield accounts[0].deploy(HealthRecords)
